import places from 'places.js';

const initAutocomplete = () => {
    const addressInput = document.getElementById('flat_address');
        if (addressInput) {
            places({ container: addressInput });
    }
};

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/yaasir007/ckw82y0v9b3jw14pabojmqf0s' // <-- use your own!
});

export { initAutocomplete };