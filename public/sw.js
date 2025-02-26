self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/assets/images/1.jpg',
        '/assets/images/dr1.png',
        '/assets/images/dr2.png',
        '/assets/images/dr3.png',
        '/assets/images/dr4.png',
        '/assets/images/dr5.png',
        '/assets/images/dr6.png',
        '/assets/images/dr7.png',
        '/assets/images/dr8.png',
        '/assets/images/dr10.jpg',
        '/assets/images/dr12.jpg',
        '/assets/images/logo.png',
        '/assets/images/frontbackground.jpg',
        '/icons/icon512_maskable.png',
        '/icons/icon512_rounded.png',
        '/data/doctors.json',
        '/data/services.json',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.url.startsWith('http')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response; // Se utiliza estrategia de cache-first
          }
          return fetch(event.request).then(
            response => {
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              const responseToCache = response.clone();
              caches.open('pwa-cache')
                .then(cache => {
                  cache.put(event.request, responseToCache);
                  return response;
                });
                return response;
              }
          );
        })
    );
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('http')) {
    event.respondWith(
      caches.open('pwa-cache').then((cache) => {
        return cache.match(event.request).then((response) => {
          const fetchPromise = fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return response || fetchPromise;
        });
      })
    );
  }
});