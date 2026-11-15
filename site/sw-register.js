// 注册 Service Worker（超时重试 + 本地缓存），失败不影响游戏本身
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/', updateViaCache: 'none' })
      .catch((err) => console.warn('[sw] register failed:', err && err.message));
  });
}

// 首屏兜底：国内到 Cloudflare 的线路偶尔会把某个资源「卡死」，Cocos 加载器不会超时重试，
// 表现就是 logo 之后一直黑屏。这里如果 45 秒还没进入游戏，自动重载一次——
// 第二次加载时 Service Worker 已经接管，会带超时重试把卡住的资源拉下来。
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
