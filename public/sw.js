const CACHENAME = 'v1';

const urlsToCache = [
  'https://www.mdpabel.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme_2.0d2d691e.jpg&w=2048&q=75',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHENAME).then((cache) => {
      cache.addAll();
    }),
  );
});

self.addEventListener('activate', () => {
  console.log('SW activated');
});

self.addEventListener('fetch', (e) => {
  console.log('SW installed');
});
