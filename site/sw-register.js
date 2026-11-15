// 注册 Service Worker（超时重试 + 本地缓存），失败不影响游戏本身。
//
// 注意：iPhone/iPad 和 Safari 上先不启用 —— Safari 对 Service Worker 合成响应（new Response(...)）
// 的处理与 Chrome 不同，可能让模块脚本加载失败导致黑屏。iOS 上本来加载就正常，不需要这层兜底。
(function () {
  if (!('serviceWorker' in navigator)) return;

  var ua = navigator.userAgent;
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isSafari = /Safari/.test(ua) && !/Chrome|Chromium|Edg|CriOS|FxiOS|OPR/.test(ua);
  var isWeChat = /MicroMessenger/i.test(ua);

  if (isIOS || isSafari || isWeChat) {
    // 救急：如果之前注册过（旧版本部署的），主动注销，避免继续被旧逻辑接管
    navigator.serviceWorker
      .getRegistrations()
      .then(function (regs) {
        return Promise.all(regs.map(function (r) { return r.unregister(); }));
      })
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
