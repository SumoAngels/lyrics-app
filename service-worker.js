self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('lyrics-app').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/style.css',
                '/song.mp3',
            ]);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cacheRes) => {
            return cacheRes || fetch(e.request);
        })
    );
});
