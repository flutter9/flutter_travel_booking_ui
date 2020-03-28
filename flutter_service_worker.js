'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/tokyo.png": "e9f95ae32241a739ac8b5f2d247c7032",
"/assets/assets/images/london.png": "3e583791c5f937932c4fe570bc331afb",
"/assets/assets/images/rome.png": "9df488f872b855dbc26543c510babdcc",
"/assets/assets/images/sydney.png": "263c3fa3979bb08258e8067a5a3a5665",
"/assets/assets/images/amsterdam.png": "6c1fbaca21743d16b28699398a40b5a4",
"/assets/assets/images/bangkok.png": "2333c3a48b93cc1d12c00f9d2eb2bedf",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "a4d0d134b8bc12880fafe457d0ff9bed",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/main.dart.js": "835787dcc15e8c12d8f808d42e279ce1"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
