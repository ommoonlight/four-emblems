/* 四纹章静态站 Service Worker
 *
 * 目的：国内到 Cloudflare 的线路会间歇性「卡住」——请求发出去了、响应头也可能回来了，
 * 但响应体传一半就停住（实测 6.79 MB 的引擎包卡在 2.4 MB，30 秒没动静）。
 * Cocos 的加载器没有超时重试机制，一个请求卡住就永远黑屏。
 *
 * 这里做三件事：
 * 1. 给每个同源请求加超时：超过 TIMEOUT 仍没下载完就中止并重试（最多 RETRIES 次）
 * 2. 下载完成的资源写入 Cache Storage，第二次访问直接命中缓存（0 网络请求）
 * 3. 入口文件（html/js 清单）走「网络优先」，保证发版后能拿到新版本
 */

const VERSION = 'fe-v1';
const CACHE = `four-emblems-${VERSION}`;
const TIMEOUT = 30000;
const RETRIES = 3;

// 入口文件：必须网络优先，否则发版后用户会卡在旧版本
function isEntry(url) {
  return (
    url.endsWith('/') ||
    url.endsWith('/index.html') ||
    url.endsWith('/sw.js') ||
    url.endsWith('/sw-register.js') ||
    url.endsWith('/index.js') ||
    url.endsWith('/application.js') ||
    url.endsWith('/src/settings.json') ||
    url.endsWith('/src/import-map.json') ||
    url.endsWith('/style.css')
  );
}

function withTimeout(promise, ms, label) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timeout: ${label}`)), ms);
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      (e) => { clearTimeout(timer); reject(e); }
    );
  });
}

// 完整下载响应体（含超时），返回可复用的 Response
async function download(request, attempt) {
  const label = `${attempt + 1}/${RETRIES} ${new URL(request.url).pathname}`;
  const res = await fetch(request, { cache: 'no-store' });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${label}`);
  if (res.status === 206) return res; // Range 请求不做缓存与重写

  // 关键：body 也要在超时内读完，否则「头回来了、体卡住」的情况抓不到
  const buf = await withTimeout(res.clone().arrayBuffer(), TIMEOUT, label);
  return new Response(buf, {
    status: res.status,
    statusText: res.statusText,
    headers: res.headers,
  });
}

async function fetchWithRetry(request) {
  let lastErr;
  for (let attempt = 0; attempt < RETRIES; attempt++) {
    try {
      return await download(request, attempt);
    } catch (err) {
      lastErr = err;
      // 递增退避，给线路一点恢复时间
      if (attempt < RETRIES - 1) await new Promise((r) => setTimeout(r, 800 * (attempt + 1)));
    }
  }
  throw lastErr;
}

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // 放过第三方（analytics 等）

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);

      if (isEntry(url.pathname)) {
        try {
          const fresh = await fetchWithRetry(request);
          if (fresh.status === 200) cache.put(request, fresh.clone());
          return fresh;
        } catch (err) {
          const cached = await cache.match(request);
          if (cached) return cached;
          throw err;
        }
      }

      // 静态资源：缓存优先 + 超时重试
      const cached = await cache.match(request);
      if (cached) return cached;

      const fresh = await fetchWithRetry(request);
      if (fresh.status === 200) cache.put(request, fresh.clone());
      return fresh;
    })()
  );
});
