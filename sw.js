self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("ravenloft-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./rooms.js",
        "./walls.html",
        "./floor-2.html",
        "./floor-1.html",
        "./floor0.html",
        "./floor1.html",
        "./floor2.html",
        "./floor3-7.html",
        "./walls.webp",
        "./floor-2.webp",
        "./floor-1.webp",
        "./floor0.webp",
        "./floor1.webp",
        "./floor2.webp",
        "./floor3-7.webp"
      ]);
    })
  );
});
