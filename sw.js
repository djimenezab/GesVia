const CACHE_NAME = 'gesvia-v1.28';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png',
  './plano_zona2.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Solo gestionamos GET de la propia app; la API de GitHub y las fotos raw pasan directas
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;

  const url = new URL(e.request.url);
  const esApp = url.pathname.endsWith('/') || url.pathname.endsWith('index.html') || url.pathname.endsWith('sw.js');

  if (esApp) {
    // La app (HTML/SW): SIEMPRE intentar red primero, así se ven las actualizaciones al momento.
    // Si no hay conexión, usar la copia guardada.
    e.respondWith(
      fetch(e.request)
        .then(resp => {
          const copia = resp.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, copia));
          return resp;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Recursos estáticos (iconos, plano): caché primero (rápido y offline).
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
