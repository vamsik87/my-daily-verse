
const CACHE_NAME = 'bible-app-cache-v3'; // Incremented cache version
// Only cache the absolute essential files for the app shell to load
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/index.tsx', // Main entry point
  '/App.tsx',
  '/assets/icon-192.png',
  '/assets/icon-512.png'
];

// Install the service worker and cache the app shell
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching app shell');
        return cache.addAll(APP_SHELL_URLS);
      })
      .catch(err => {
        console.error('Cache addAll failed:', err);
        // Don't fail the install if caching fails
        return Promise.resolve();
      })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Fetch assets from cache or network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip external requests (CDNs, etc.) to avoid timeouts
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request because it's a stream and can only be consumed once
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if we received a valid response.
            // We don't want to cache errors.
            if (!response || response.status !== 200) {
              return response;
            }

            // Clone the response because it's also a stream
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(err => {
                console.error('Cache put failed:', err);
              });

            return response;
          }
        ).catch(err => {
            console.error('Fetch failed:', err);
            // Return a fallback response for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            throw err;
        });
      })
  );
});

// Clean up old caches and take control immediately
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    })
  );
});
