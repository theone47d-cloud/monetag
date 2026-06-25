// sw.js - SportsRDLive + Monetag
self.options = {
    "domain": "5gvci.com",
    "zoneId": 11164216
};
self.lary = "";

// Cargar el script oficial de Monetag
importScripts('https://5gvci.com/act/files/service-worker.min.js?r=sw');

// Cache básico para mejorar el rendimiento
const CACHE_NAME = 'sportsrd-cache-v2';

self.addEventListener('install', event => {
  console.log('✅ Service Worker instalado - SportsRDLive');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
