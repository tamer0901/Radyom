self.addEventListener('install', (e) => {
    console.log('Service Worker kuruldu.');
});

self.addEventListener('fetch', (e) => {
    // Radyo stream'leri olduğu için önbellekleme yapmıyoruz
});

