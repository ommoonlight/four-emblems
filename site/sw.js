/* 四纹章静态站 Service Worker
 *
 * 背景：国内到 Cloudflare 免费线路的带宽很不稳定（实测单连接 50–300 KB/s，且会间歇性「断流」）。
 * 站点最大的文件是引擎包 cocos-js/_virtual_cc-*.js（6.79 MB，brotli 后约 2.4 MB），
 * Cocos 的加载器没有超时/重试，一次断流就永远黑屏。
 *
 * 这里做三件事：
 * 1. 流式下载 + 「断流检测」：只要还在收数据就一直等（慢没关系），连续 IDLE_TIMEOUT 毫秒收不到数据
 *    才判定卡死，中止并重试（最多 RETRIES 次）
 * 2. 下载完成的资源写入 Cache Storage，第二次访问直接命中（0 网络流量），越玩越快
 * 3. 入口文件（html/js 清单）走「网络优先」，保证发版后能拿到新版本
 */

const VERSION = 'fe-20261123-party-1';
const CACHE = `four-emblems-assets-${VERSION.replace(/^fe-/, '')}`;
const IDLE_TIMEOUT = 15000; // 连续 15 秒没有数据才认为卡死
const RETRIES = 4;

// 入口文件：必须网络优先，否则发版后用户会卡在旧版本
function isEntry(pathname) {
  return (
    pathname === '/' ||
    pathname.endsWith('/index.html') ||
    pathname.endsWith('/sw.js') ||
    pathname.endsWith('/sw-register.js') ||
    pathname.endsWith('/index.js') ||
    pathname.endsWith('/application.js') ||
    pathname.endsWith('/src/settings.json') ||
    pathname.endsWith('/src/import-map.json') ||
    pathname.endsWith('/style.css') || pathname.endsWith('/boot.js') || pathname.endsWith('/config.json') || pathname.endsWith('/bundle.js') || pathname.endsWith('/build-manifest.json') || pathname.endsWith('/release.json') || pathname.endsWith('/content-delivery.json')
  );
}

// 流式读取响应体；只要持续有数据就不打断，长时间没数据才中止
async function readFully(request) {
  const ctrl = new AbortController();
  let timer = null;
  const armIdle = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => ctrl.abort(), IDLE_TIMEOUT);
  };

  let res;
  try {
    armIdle();
    res = await fetch(request, { cache: 'no-store', signal: ctrl.signal });
  } finally {
    if (timer) clearTimeout(timer);
  }

  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  if (!res.body) return res;

  const reader = res.body.getReader();
  const chunks = [];
  try {
    for (;;) {
      armIdle();
      const { done, value } = await reader.read();
      if (done) break;
      if (value && value.length) chunks.push(value);
    }
  } finally {
    if (timer) clearTimeout(timer);
  }

  const size = chunks.reduce((sum, c) => sum + c.length, 0);
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.length;
  }

  // 响应体已经解压，原始的 content-encoding / content-length 不能再带过去
  const headers = new Headers(res.headers);
  headers.delete('content-encoding');
  headers.delete('content-length');

  return new Response(body, { status: res.status, statusText: res.statusText, headers });
}

async function fetchWithRetry(request) {
  let lastErr;
  for (let attempt = 0; attempt < RETRIES; attempt++) {
    try {
      return await readFully(request);
    } catch (err) {
      lastErr = err;
      if (attempt < RETRIES - 1) await new Promise((r) => setTimeout(r, 600 * (attempt + 1)));
    }
  }
  throw lastErr;
}

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k.startsWith('four-emblems-') && k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  // The persistent content queue streams and validates this body, then caches it.
  if (request.headers.get('X-Four-Emblems-Prefetch') === '1') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // 放过第三方（analytics 等）
  if (request.headers.has('range')) return;        // Range 请求交给浏览器

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

      const cached = await cache.match(request);
      if (cached) return cached;

      const fresh = await fetchWithRetry(request);
      if (fresh.status === 200) cache.put(request, fresh.clone());
      return fresh;
    })()
  );
});
