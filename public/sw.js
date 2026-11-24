const CACHE_NAME = 'tinogasta-pwa-v1';

// En desarrollo (localhost) no cacheamos nada para evitar conflictos con hot-reload
const IS_DEV = self.location.hostname === 'localhost';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.svg',
  '/icons/icon-512x512.svg',
];

// Instalación: cachear activos estáticos iniciales (solo en producción)
self.addEventListener('install', (event) => {
  if (IS_DEV) {
    self.skipWaiting();
    return;
  }
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activación: limpiar caches antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Network First con fallback a Cache para que funcione sin conexión
self.addEventListener('fetch', (event) => {
  // Ignorar peticiones que no sean GET
  if (event.request.method !== 'GET') return;

  // En desarrollo: pasar todo directo a la red, sin cachear
  if (IS_DEV) return;

  // Ignorar esquemas no-HTTP (chrome-extension, etc.)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Si la red responde, clonar y actualizar la cache
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(async () => {
        // Si no hay red (modo sin conexión en finca), buscar en cache local
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // Fallback para navegación de páginas: devolver index.html
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }

        return new Response('Sin conexión', { status: 503, statusText: 'Offline' });
      })
  );
});

