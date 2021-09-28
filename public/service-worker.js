const cacheName = "My-Site-Data";

// let addFile = ['/','/index.html','/static/js/bundle.js','/static/js/vendors~main.chunk.js','/static/js/main.chunk.js','/favicon.ico','/manifest.json','logo512.png', '/static/media/spaceBG.14d2b91a.jpeg', '/logo192.png']
this.addEventListener('activate', function (e) {
    console.log("[ServiceWorker] Activate");
});

// this.addEventListener('install', (event) => {
//     console.log("Service Worker Installed");
//     event.waitUntil(
//         caches.open(CACHE_NAME).then((data) => {
//             return data.addAll(urlcache)
//         }).catch((err) => {
//             console.log(err);
//         })
//     )
// });
this.addEventListener('install', (event) =>{
    console.log("The Service Wokrer has installed");
    event.waitUntil(
    caches.open(cacheName).then((data) =>{
        return data.addAll(['/','/index.html','/static/js/bundle.js','/static/js/vendors~main.chunk.js','/static/js/main.chunk.js','/favicon.ico','/manifest.json','logo512.png', '/static/media/spaceBG.14d2b91a.jpeg', '/logo192.png'])
            
    }).catch((err) =>{
      console.log("Error" , err);
    })  
    )
 })

this.addEventListener('fetch', (event) => {
    console.log(event.request);
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                console.log("Fetch", response);
                return response || fetch(event.request)
            }).catch(err => {
                console.log(err);
            })
        )
    }
})

