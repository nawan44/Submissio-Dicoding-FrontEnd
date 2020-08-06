const CACHE_NAME = 'firstpwa-v6';
// const CACHE_NAME = 'firstpwa-v6';


var urlsToCache = [
	'/',
	'/nav.html',
	'/manifest.json',
	'app.js',
	'/style/appbar.css',
	'/style/appfooter.css',
	'/style/searchbar.css',
	'/style/style.css',
	'script/view/main.js',
	'script/data/club.js',
	'script/data/data-source.js',
	
	

];

self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
})

self.addEventListener('activate', function(event){
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) {
			return Promise.all(
				cacheNames.map(function(cacheName){
					if(cacheName != CACHE_NAME){	
						console.log("ServiceWorker: cache " + cacheName + " dihapus");
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
})

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request, {cacheName:CACHE_NAME})
		.then(function(response) {
			if(response){
				console.log("ServiceWorker: Gunakan aset dari cache: ", response.url);
				return response;
			}
			
			console.log("ServiceWorker: Memuat aset dari server: ", event.request.url);
			return fetch(event.request);
		})
	);
});