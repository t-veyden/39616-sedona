var sedona_map;

ymaps.ready(function(){
    sedona_map = new ymaps.Map("arizona_map", {
        center: [35.149004053695045,-111.4877713194669, [[33.39340610818074,-115.88230256946687],[36.86720405168885,-107.09324006946689]]],
        zoom: 8
    });
    var myPlacemark = new ymaps.Placemark([34.79979563108098,-111.61052094357414], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map-marker.svg',
        iconImageSize: [27, 27],
        iconImageOffset: [-13, -13]
    });

    sedona_map.geoObjects.add(myPlacemark);
});
