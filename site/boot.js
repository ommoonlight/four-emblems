/* 四纹章静态站 · 启动层
 *
 * 为什么需要它：
 * 国内到 Cloudflare 免费线路的带宽很不稳定（实测单连接 50–300 KB/s，还经常「断流」到一半彻底不动）。
 * 站点最大的文件是引擎包 cocos-js/_virtual_cc-*.js（6.79 MB），Cocos 的加载器没有超时也没有重试，
 * 一次断流就永远停在灰屏/黑屏 —— 手机上尤其明显。
 *
 * 这里在 window.fetch 外面包一层（SystemJS 加载模块用的就是 fetch，所以引擎包也能接管）：
 *   1. 流式读取，只在「连续 15 秒收不到数据」时才判定断流，慢没关系
 *   2. 断流后自动重试（最多 5 次）
 *   3. 下载过的资源写进 Cache Storage，第二次打开几乎 0 流量
 *   4. 全屏进度条，让人看到「确实在加载」
 *
 * 不依赖 Service Worker，所以 iOS Safari 第一次访问也生效。
 */
(function () {
  'use strict';

  // ---------- 0. 错误收集 + 诊断面板 ----------
  window.__feErrors = [];
  function showDiag(force) {
    try {
      if (document.getElementById('fe-diag')) return;
      if (window.__fourEmblemsReady) return;
      if (!force && window.cc && window.cc.director && cc.director.getTotalFrames && cc.director.getTotalFrames() > 10) return;

      var probe = document.createElement('canvas');
      var gl2 = null;
      try { gl2 = probe.getContext('webgl2'); } catch (e) {}
      var lines = [
        '游戏没有启动 — 诊断信息',
        '',
        'UA: ' + navigator.userAgent,
        'URL: ' + location.href,
        '视口: ' + window.innerWidth + 'x' + window.innerHeight + ' @' + window.devicePixelRatio + 'x',
        'WebGL2: ' + (gl2 ? '支持' : '不支持'),
        'ServiceWorker: ' + (navigator.serviceWorker ? (navigator.serviceWorker.controller ? '已接管' : '未接管') : '不支持'),
        'window.cc: ' + (window.cc ? '已加载' : '未加载'),
        'canvas: ' + (document.querySelector('canvas') ? '有' : '无'),
        '',
        '已加载: ' + (window.__feLoadedMB || '?') + ' MB / ' + (window.__feTotalMB || '?') + ' MB',
        '错误(' + window.__feErrors.length + '):',
        window.__feErrors.slice(0, 8).join('\n') || '(无)',
        '',
        '页面资源: ' + performance.getEntriesByType('resource').length + ' 个请求',
      ];
      var box = document.createElement('div');
      box.id = 'fe-diag';
      box.style.cssText = 'position:fixed;left:0;top:0;right:0;bottom:0;z-index:2147483647;background:#0d1117;' +
        'color:#e6edf3;font:12px/1.55 ui-monospace,Menlo,Consolas,monospace;padding:14px;white-space:pre-wrap;' +
        'word-break:break-all;overflow:auto;-webkit-user-select:text;user-select:text';
      box.textContent = lines.join('\n');
      var close = document.createElement('div');
      close.textContent = '✕ 收起';
      close.style.cssText = 'position:fixed;right:14px;top:10px;z-index:2147483647;color:#9fb3c8;font:13px system-ui';
      (document.body || document.documentElement).appendChild(box);
      box.appendChild(close);
      close.onclick = function (ev) { ev.stopPropagation(); box.remove(); window.__feDiagClosed = true; };
    } catch (e) { /* 忽略 */ }
  }
  window.addEventListener('error', function (e) {
    var t = e && e.target;
    var src = t && (t.src || t.href) ? ' src=' + String(t.src || t.href).split('/').pop() : '';
    window.__feErrors.push(((e && e.message) || 'resource error') + src);
    // Collect the error for user-requested diagnostics.
  }, true);
  window.addEventListener('unhandledrejection', function (e) {
    var r = e && e.reason;
    window.__feErrors.push('reject: ' + String((r && (r.message || r.name)) || r).slice(0, 200));
    // Collect the error for user-requested diagnostics.
  });

  // ---------- 1. 进度条 ----------
  var loaded = 0, total = 0, bar = null, label = null, hideTimer = null, startedAt = Date.now(), lastProgressAt = Date.now();

  function ensureUI() {
    if (bar || !document.body) return;
    var wrap = document.createElement('div');
    wrap.id = 'fe-progress';
    wrap.style.cssText = 'position:fixed;left:0;right:0;bottom:0;top:0;z-index:2147483000;display:flex;' +
      'flex-direction:column;align-items:center;justify-content:flex-end;gap:12px;padding-bottom:12vh;pointer-events:none;' +
      'font:14px/1.6 system-ui,-apple-system,sans-serif;color:#e8f0e9';
    var track = document.createElement('div');
    track.style.cssText = 'width:min(240px,60vw);height:6px;border-radius:3px;background:rgba(255,255,255,.18);overflow:hidden';
    bar = document.createElement('div');
    bar.style.cssText = 'width:0%;height:100%;border-radius:3px;background:linear-gradient(90deg,#9fd3a8,#e6d7a8);transition:width .25s';
    track.appendChild(bar);
    label = document.createElement('div');
    label.style.cssText = 'text-align:center;text-shadow:0 1px 3px rgba(0,0,0,.6)';
    label.textContent = '正在加载游戏…';
    wrap.appendChild(track);
    wrap.appendChild(label);
    document.body.appendChild(wrap);
  }

  function paint() {
    if (!bar) return;
    var pct = total > 0 ? Math.min(99, Math.round((loaded / total) * 100)) : null;
    bar.style.width = (pct === null ? 10 : pct) + '%';
    var slow = Date.now() - startedAt > 30000 ? '\n线路较慢，仍在下载…' : '';
    label.textContent = (pct === null
      ? '正在加载游戏…'
      : '正在加载游戏… ' + pct + '%（' + (loaded / 1048576).toFixed(1) + ' / ' + (total / 1048576).toFixed(1) + ' MB）') + slow;
    window.__feLoadedMB = (loaded / 1048576).toFixed(1);
    window.__feTotalMB = (total / 1048576).toFixed(1);
  }

  function bump(bytes) {
    if (!bytes) return;
    loaded += bytes;
    lastProgressAt = Date.now();
    paint();
  }

  // 网页里大多数响应没有 content-length（brotli 流式传输），
  // 所以用 Resource Timing 的 decodedBodySize 来算真实进度（未压缩字节，和 manifest 同口径）。
  var poller = setInterval(function () {
    try {
      var rs = performance.getEntriesByType('resource');
      var sum = 0;
      for (var i = 0; i < rs.length; i++) {
        var s = rs[i].decodedBodySize;
        if (s) sum += s;
      }
      if (sum > loaded) { loaded = sum; lastProgressAt = Date.now(); paint(); }
    } catch (e) { /* 忽略 */ }
  }, 600);

  function done() {
    if (hideTimer) return;
    if (poller) clearInterval(poller);
    hideTimer = setTimeout(function () {
      var el = document.getElementById('fe-progress');
      if (el) el.remove();
      bar = label = null;
    }, 600);
  }

  // cc 起来之后收起进度条
  var watcher = setInterval(function () {
    if (window.__fourEmblemsReady) {
      document.getElementById('fe-diag')?.remove();
      clearInterval(watcher);
      done();
    }
  }, 700);

  // 只有「真的卡住」才弹诊断面板：连续 25 秒没有任何进度才认为断流死了。
  // 单纯慢（还在下载）不弹，只让进度条一直走。
  setInterval(function () {
    try {
      if (window.__fourEmblemsReady || !label || Date.now() - lastProgressAt <= 25000) return;
      if (!document.getElementById('fe-help')) {
        var help = document.createElement('button');
        help.id = 'fe-help'; help.textContent = '加载较慢 · 查看诊断';
        help.style.pointerEvents = 'auto'; help.onclick = function () { showDiag(true); };
        label.parentNode.appendChild(help);
      }
    } catch (e) { /* 忽略 */ }
  }, 5000);

  // ---------- 2. 带重试与断流检测的 fetch ----------
  var CACHE_NAME = 'four-emblems-assets-20261125-icon-focus';
  var IDLE_TIMEOUT = 15000;   // 连续 15 秒没数据才算断流
  var RETRIES = 5;
  var MAX_BODY = 64 * 1024 * 1024;

  function isEntry(pathname) {
    return pathname === '/' ||
      /\/(index\.html|index\.js|application\.js|settings\.json|import-map\.json|polyfills\.bundle\.js|system\.bundle\.js|style\.css|boot\.js|sw\.js)$/.test(pathname);
  }

  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  var nativeFetch = window.fetch ? window.fetch.bind(window) : null;

  async function readWithIdle(request) {
    var ctrl = new AbortController(), timer = null, reader = null;
    var abort = function () { ctrl.abort(); if (reader) reader.cancel().catch(function () {}); };
    var arm = function () { clearTimeout(timer); timer = setTimeout(abort, IDLE_TIMEOUT); };
    if (request.signal.aborted) throw new DOMException('Aborted', 'AbortError');
    request.signal.addEventListener('abort', abort, { once: true });
    try {
      arm();
      var res = await nativeFetch(request, { signal: ctrl.signal, cache: 'no-store', credentials: 'same-origin' });
      if (!res.ok || !res.body) return res;
      reader = res.body.getReader();
      var chunks = [], size = 0;
      for (;;) {
        arm();
        var step = await reader.read();
        if (ctrl.signal.aborted) throw new DOMException('Aborted', 'AbortError');
        if (step.done) break;
        if (step.value) { chunks.push(step.value); size += step.value.length; bump(step.value.length); }
        if (size > MAX_BODY) throw new Error('Response exceeds startup download limit');
      }
      var body = new Uint8Array(size), off = 0;
      for (var i = 0; i < chunks.length; i++) { body.set(chunks[i], off); off += chunks[i].length; }
      var headers = new Headers(res.headers);
      headers.delete('content-encoding'); headers.delete('content-length');
      return new Response(body, { status: res.status, statusText: res.statusText, headers: headers });
    } finally {
      clearTimeout(timer);
      request.signal.removeEventListener('abort', abort);
      if (reader) reader.releaseLock();
    }
  }

  async function withRetry(request) {
    var lastErr;
    for (var attempt = 0; attempt < RETRIES; attempt++) {
      try {
        if (request.signal.aborted) throw new DOMException('Aborted', 'AbortError');
        return await readWithIdle(request);
      } catch (err) {
        if (request.signal.aborted) throw err;
        lastErr = err;
        if (attempt < RETRIES - 1) await sleep(400 * (attempt + 1));
      }
    }
    throw lastErr || new Error('fetch failed');
  }

  var releaseReset = (window.caches ? caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k.indexOf('four-emblems-')===0 && k!=='four-emblems-assets-20261125-icon-focus';}).map(function(k){return caches.delete(k);}));}).catch(function(){}) : Promise.resolve());
  var cachePromise = (window.caches && caches.open) ? caches.open(CACHE_NAME).catch(function () { return null; }) : Promise.resolve(null);

  window.fetch = async function (input, init) {
    var req;
    try {
      req = new Request(input, init);
    } catch (e) {
      return nativeFetch ? nativeFetch(input, init) : Promise.reject(e);
    }

    if (req.method !== 'GET') return nativeFetch ? nativeFetch(input, init) : Promise.reject(new Error('no fetch'));
    var url;
    try { url = new URL(req.url); } catch (e) { return nativeFetch ? nativeFetch(input, init) : Promise.reject(e); }
    if (url.origin !== location.origin) return nativeFetch ? nativeFetch(input, init) : Promise.reject(new Error('cross-origin'));

    // Queue-owned prefetch needs streaming progress and its own cancellation.
    if (req.headers.get('X-Four-Emblems-Prefetch') === '1') return nativeFetch(req);
    await releaseReset;
    var cache = await cachePromise;

    if (!isEntry(url.pathname) && cache) {
      try {
        var hit = await cache.match(req);
        if (hit) { bump((hit.headers.get('content-length') | 0) || 0); return hit; }
      } catch (e) { /* 忽略缓存错误 */ }
    }

    var res;
    try {
      res = await withRetry(req);
    } catch (err) {
      if (cache && !isEntry(url.pathname)) {
        var fallback = await cache.match(req).catch(function () { return null; });
        if (fallback) return fallback;
      }
      throw err;
    }

    if (res.ok && cache && res.body !== null && url.pathname !== '/boot.js') {
      var len = res.headers.get('content-length') | 0;
      bump(len);
      try { cache.put(req, res.clone()).catch(function () {}); } catch (e) { /* 忽略 */ }
    } else if (res.ok) {
      bump(res.headers.get('content-length') | 0);
    }
    return res;
  };

  // ---------- 3. 总大小（用于进度百分比） ----------
  (function loadTotal() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/build-manifest.json', true);
    xhr.onload = function () {
      try {
        var m = JSON.parse(xhr.responseText);
        if (m && m.totalBytes) { total = m.totalBytes; paint(); }
      } catch (e) {}
    };
    xhr.send();
  })();

  // ---------- 4. Service Worker（桌面端第二次访问更快；iOS 不装） ----------
  document.addEventListener('DOMContentLoaded', ensureUI);
  if (document.body) ensureUI();
  paint();

  if ('serviceWorker' in navigator) {
    var ua = navigator.userAgent;
    var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    var isSafari = /Safari/.test(ua) && !/Chrome|Chromium|Edg|CriOS|FxiOS|OPR/.test(ua);
    var isWeChat = /MicroMessenger/i.test(ua);
    if (!isIOS && !isSafari && !isWeChat) {
      navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch(function () {});
    }
  }
})();
