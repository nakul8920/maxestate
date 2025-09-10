// Service Worker for caching static assets
const CACHE_NAME = 'max-estate-v2';
const STATIC_ASSETS = [
  '/',
  '/banner-images.jpg',
  '/src/assets/max-towers.jpg',
  '/src/assets/amenities.jpg',
  '/src/assets/hero-building.jpg',
  '/amenities/swimming-pool.jpeg',
  '/amenities/gym.jpg',
  '/amenities/gardens.jpg',
  '/amenities/amphitheater.jpg',
  '/amenities/jogging.jpg',
  '/amenities/play-area.jpg',
  '/amenities/clubhouse.jpg',
  '/amenities/security.jpg',
  '/floor-plans/estate-128-typology-1.jpg',
  '/floor-plans/estate-128-typology-2.jpg',
  '/floor-plans/estate-128-typology-3.jpg',
  '/floor-plans/estate-128-typology-4.jpg',
  '/masterplan/estate-128-typology-new-5.jpg',
  '/placeholder.svg',
  '/favicon_io/favicon.ico'
];

// Cache strategies
const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const url = new URL(event.request.url);
  
  // Cache-first strategy for images and static assets
  if (event.request.destination === 'image' || 
      url.pathname.includes('/amenities/') ||
      url.pathname.includes('/floor-plans/') ||
      url.pathname.includes('/masterplan/') ||
      url.pathname.includes('/assets/') ||
      url.pathname.endsWith('.jpg') ||
      url.pathname.endsWith('.jpeg') ||
      url.pathname.endsWith('.png') ||
      url.pathname.endsWith('.webp')) {
    
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          
          return fetch(event.request)
            .then((fetchResponse) => {
              if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                return fetchResponse;
              }

              const responseToCache = fetchResponse.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });

              return fetchResponse;
            });
        })
    );
    return;
  }

  // Network-first strategy for HTML and API calls
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
