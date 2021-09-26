CACHE_NAME = "My-Site-Data";

let urlcache = [

    '/static/js/bundle.js',
    '/static/js/vendors~main.chunk.js',
    '/static/js/main.chunk.js',
    '/favicon.ico',
    '/manifest.json',
    '/robots.txt',
    '/logo192.png',
    '/',
    '/index.html',

];

this.addEventListener("install", (event) => {
    this.skipWaiting()
    event.waitUntil(
        caches.open(CACHE_NAME).then((cacheData) => {
            return cacheData.addAll(urlcache)
        }).catch((err) => {
            console.log(err);
        })
    )
});
this.addEventListener("activate", function (e) {
    console.log("[ServiceWorker] Activate");
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch.response
            }).catch(err => {
                console.log(err);
            })
        )
    }
})

