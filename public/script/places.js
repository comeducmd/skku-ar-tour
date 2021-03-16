window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            id: 'place1',
            name: '중앙학술정보관',
            location: {
                lat: 37.58600973854398,
                lng: 126.9920847471258,
            },
            position: '0 0 -30',
        },
        {
            id: 'place2',
            name: '금잔디광장',
            location: {
                lat: 37.588227,
                lng: 126.992820,
            },
            position: '0 -20 -60',
        }
    ];
}

function renderPlaces(places) {
    const scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let id = place.id;
        let latitude = place.location.lat;
        let longitude = place.location.lng;
        let position = place.position;

        const icon = document.createElement('a-image');
        icon.id = id;
        icon.setAttribute('cursor-listener', '');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('src', '#marker');
        icon.setAttribute('scale', '30 30 30');
        icon.setAttribute('position', `${position}`);
        icon.setAttribute('name', place.name);

        scene.appendChild(icon);
    });
}