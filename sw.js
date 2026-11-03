// Cromie degli intervalli — service worker
// Quando aggiorni index.html, cambia VERSIONE: così gli iPhone scaricano la nuova copia.
const VERSIONE = 'cromie-v10';
const GUSCIO = [
  './', './index.html', './manifest.webmanifest',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSIONE).then(c => c.addAll(GUSCIO)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSIONE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Prima la copia salvata (funziona senza rete), intanto aggiorna in background.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const proprio = url.origin === location.origin;
  const font = url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
  if (!proprio && !font) return;
  e.respondWith(caches.open(VERSIONE).then(async cache => {
    const salvato = await cache.match(req, { ignoreSearch: proprio });
    const rete = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    }).catch(() => salvato);
    return salvato || rete;
  }));
});
