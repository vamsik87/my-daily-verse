
const CACHE_NAME = 'bible-app-cache-v4'; // Incremented cache version
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

// Background Sync
self.addEventListener('sync', event => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Perform background sync operations
      syncData()
    );
  }
});

// Periodic Background Sync
self.addEventListener('periodicsync', event => {
  console.log('Periodic sync triggered:', event.tag);
  
  if (event.tag === 'periodic-sync') {
    event.waitUntil(
      // Perform periodic sync operations
      periodicSyncData()
    );
  }
});

// Push Notifications
self.addEventListener('push', event => {
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New content available!',
    icon: '/assets/icon-192.png',
    badge: '/assets/icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: '/assets/icon-192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assets/icon-192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Digital Sanctuary Bible', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('Notification clicked:', event);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
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

// Background sync function
async function syncData() {
  try {
    // Sync user data, notes, bookmarks, etc.
    console.log('Performing background sync...');
    
    // Example: Sync notes to server
    const notes = await getNotesFromStorage();
    if (notes.length > 0) {
      // Sync with server
      console.log('Syncing notes:', notes.length);
    }
    
    // Example: Sync bookmarks
    const bookmarks = await getBookmarksFromStorage();
    if (bookmarks.length > 0) {
      console.log('Syncing bookmarks:', bookmarks.length);
    }
    
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// Periodic sync function
async function periodicSyncData() {
  try {
    console.log('Performing periodic sync...');
    
    // Check for new content or updates
    const response = await fetch('/api/check-updates', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (response.ok) {
      const updates = await response.json();
      if (updates.hasNewContent) {
        // Show notification for new content
        self.registration.showNotification('Digital Sanctuary Bible', {
          body: 'New content available!',
          icon: '/assets/icon-192.png',
          badge: '/assets/icon-192.png'
        });
      }
    }
    
  } catch (error) {
    console.error('Periodic sync failed:', error);
  }
}

// Helper functions for storage
async function getNotesFromStorage() {
  // This would typically interact with IndexedDB or localStorage
  return [];
}

async function getBookmarksFromStorage() {
  // This would typically interact with IndexedDB or localStorage
  return [];
}