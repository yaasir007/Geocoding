// import mapboxgl from 'mapbox-gl';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// const buildMap = (mapElement) => {
//     mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
//         return new mapboxgl.Map({
//             container: 'map',
//             style: 'mapbox://styles/mapbox/streets-v10'
//     });
// };

// const addMarkersToMap = (map, markers) => {
//     markers.forEach((marker) => {
//         const popup = new mapboxgl.Popup().setHTML(marker.info_window);

//         // Create a HTML element for your custom marker
//             const element = document.createElement('div');
//             element.className = 'marker';
//             element.style.backgroundImage = `url('${marker.image_url}')`;
//             element.style.backgroundSize = 'contain';
//             element.style.width = '25px';
//             element.style.height = '25px';
            
//         new mapboxgl.Marker(element)
//             .setLngLat([ marker.lng, marker.lat ])
//             .setPopup(popup)
//             .addTo(map);
//     });
// };

// const fitMapToMarkers = (map, markers) => {
//     const bounds = new mapboxgl.LngLatBounds();
//         markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
//         map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
// };

// const initMapbox = () => {
//     const mapElement = document.getElementById('map');
//         if (mapElement) {
//             const map = buildMap(mapElement);
//             const markers = JSON.parse(mapElement.dataset.markers);
//             addMarkersToMap(map, markers);
//             fitMapToMarkers(map, markers);
//     }
// };

// // [...]
// // if (mapElement) {
// //   // [...]
// // map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken,
// //                                     mapboxgl: mapboxgl }));
// // }

// export { initMapbox };


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';


const initMapbox = () => {
    const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;

    const bounds = [
        [-20.27715015824714,57.56824988389454] // Mauritius Coordinates
        ];

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/yaasir007/ckw82y0v9b3jw14pabojmqf0s',
        center: [-20.263,57.608],
        zoom: 9.15,
        });

    const markers = JSON.parse(mapElement.dataset.markers);
    markers.forEach((marker) => {
        const popup = new mapboxgl.Popup().setHTML(marker.info_window);

        new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .setPopup(popup)
        .addTo(map);
        });

    const fitMapToMarkers = (map, markers) => {
        const bounds = new mapboxgl.LngLatBounds();
        markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
        map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
        };

        map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl }));
    }
};

export { initMapbox };
