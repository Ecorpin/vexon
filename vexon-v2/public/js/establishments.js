    // Initialize the map
    var map = L.map('map').setView([20, 0], 2); // Centered globally

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add markers for Vexon offices & locations
    var locations = [
        { name: "Vexon HQ - USA", coords: [37.7749, -122.4194], details: "Headquarters in Silicon Valley." },
        { name: "European Office - Germany", coords: [52.5200, 13.4050], details: "R&D and customer support in Europe." },
        { name: "Asia Operations - Japan", coords: [35.6895, 139.6917], details: "Manufacturing and innovation hub." },
        { name: "Global Partner - India", coords: [28.6139, 77.2090], details: "Strategic partnership for automation solutions." },
    ];

    locations.forEach(function(location) {
        L.marker(location.coords)
            .addTo(map)
            .bindPopup("<b>" + location.name + "</b><br>" + location.details);
    });