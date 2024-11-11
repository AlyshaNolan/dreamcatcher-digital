document.addEventListener("DOMContentLoaded", function(){
    let maps = document.getElementsByClassName("c-map-embed");

    L.Icon.Default.imagePath = '/images/map/';

    for (let i = 0; i < maps.length; i++) {
        let mapEl = maps[i];
        let map = L.map(mapEl, { scrollWheelZoom: false });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        let latitude = parseFloat(mapEl.getAttribute('maplat'));
        let longitude = parseFloat(mapEl.getAttribute('maplong'));
        
        // Set initial view with a specific zoom level
        map.setView([latitude, longitude], 12); // Adjust '12' to be further out or closer in

        L.marker([latitude, longitude]).addTo(map);
    }
});