// 页面最早执行的脚本：错误捕获 + 移动端诊断面板 + Service Worker 注册策略
(function () {
  // ---- 1. 先挂错误收集，必须在模块加载之前 ----
  window.__feErrors = [];
  window.addEventListener('error', function (e) {
    var msg = (e && e.message) || '';
    var where = e && e.filename ? ' @' + e.filename.split('/').pop() + ':' + e.lineno : '';
    if (msg || where) window.__feErrors.push(msg + where);
  }, true);
  window.addEventListener('unhandledrejection', function (e) {
    var r = e && e.reason;
    window.__feErrors.push('reject: ' + ((r && (r.message || r.name)) || String(r)).slice(0, 200));
  });

  // ---- 2. 如果 15 秒还没进游戏，直接在页面上打印诊断信息 ----
  // 手机上没有控制台，只能靠这个面板把信息带回来看
  setTimeout(function () {
    try {
      if (window.cc && cc.director && cc.director.getTotalFrames && cc.director.getTotalFrames() > 10) return;
      if (document.getElementById('fe-diag')) return;

      var c2 = document.createElement('canvas');
      var gl2 = null, gl1 = null;
      try { gl2 = c2.getContext('webgl2'); } catch (e) {}
      try { gl1 = c2.getContext('webgl') || c2.getContext('experimental-webgl'); } catch (e) {}

      var lines = [
        '游戏没有启动 — 诊断信息',
        '',
        'UA: ' + navigator.userAgent,
        'URL: ' + location.href,
        '视口: ' + window.innerWidth + 'x' + window.innerHeight + ' @' + window.devicePixelRatio + 'x',
        'ES Module: ' + ('noModule' in HTMLScriptElement.prototype ? '支持' : '不支持'),
        'WebGL2: ' + (gl2 ? '支持' : '不支持'),
        'WebGL1: ' + (gl1 ? '支持' : '不支持'),
        'fetch/async: ' + (typeof fetch === 'function' && typeof Promise === 'function' ? 'ok' : '缺失'),
        'ServiceWorker: ' + (navigator.serviceWorker ? (navigator.serviceWorker.controller ? '已接管' : '未接管') : '不支持'),
        'window.cc: ' + (window.cc ? '已加载' : '未加载'),
        '',
        '错误(' + window.__feErrors.length + '):',
        window.__feErrors.slice(0, 8).join('\n') || '(无)',
      ];

      var box = document.createElement('div');
      box.id = 'fe-diag';
      box.style.cssText = [
        'position:fixed', 'left:0', 'top:0', 'right:0', 'bottom:0', 'z-index:2147483647',
        'background:#0d1117', 'color:#e6edf3', 'font:12px/1.55 ui-monospace,Menlo,Consolas,monospace',
        'padding:14px', 'white-space:pre-wrap', 'word-break:break-all', 'overflow:auto',
        '-webkit-user-select:text', 'user-select:text',
      ].join(';');
      box.textContent = lines.join('\n');
      document.body.appendChild(box);
    } catch (e) {
      /* 忽略 */
    }
  }, 15000);

  // ---- 3. Service Worker 注册 ----
  // iPhone / Safari / 微信里不注册：Safari 对 Service Worker 合成响应的处理与 Chrome 不同，
  // 且移动端本来加载就快，不需要这层兜底。
  if (!('serviceWorker' in navigator)) return;

  var ua = navigator.userAgent;
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isSafari = /Safari/.test(ua) && !/Chrome|Chromium|Edg|CriOS|FxiOS|OPR/.test(ua);
  var isWeChat = /MicroMessenger/i.test(ua);

  if (isIOS || isSafari || isWeChat) {
    // 救急：注销旧版本可能已经注册的 Service Worker
    navigator.serviceWorker
      .getRegistrations()
      .then(function (regs) { return Promise.all(regs.map(function (r) { return r.unregister(); })); })
      .then(function () {
        if (window.caches && caches.keys) {
          return caches.keys().then(function (keys) {
            return Promise.all(keys.map(function (k) { return caches.delete(k); }));
          });
        }
      })
      .catch(function () { /* 忽略 */ });
    return;
  }

  window.addEventListener('load', function () {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/', updateViaCache: 'none' })
      .catch(function (err) { console.warn('[sw] register failed:', err && err.message); });
  });
})();

// 首屏兜底：桌面端从国内到 Cloudflare 的线路偶尔会把某个资源「卡死」，
// 45 秒还没进入游戏就自动重载一次（此时 Service Worker 已接管，会带断流重试）。
(function () {
  var KEY = 'fe-auto-reload';
  var DELAY = 45000;
  setTimeout(function () {
    try {
      var cc = window.cc;
      var frames = cc && cc.director && cc.director.getTotalFrames ? cc.director.getTotalFrames() : 0;
      if (frames > 10) return;                    // 已经在正常跑了
      if (sessionStorage.getItem(KEY)) return;    // 本次会话只自动重载一次
      sessionStorage.setItem(KEY, '1');
      location.reload();
    } catch (e) {
      /* 忽略 */
    }
  }, DELAY);
})();
