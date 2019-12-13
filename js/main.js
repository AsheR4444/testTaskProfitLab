// == yandex map ==
ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
        center: [55.99205563460798, 92.98406626455682],
        zoom: 16,
        controls: ['zoomControl'],
        behaviors: []
    });

    let placemark = new ymaps.Placemark( // создал placemark указав центр
        [55.9922510687489, 92.98318649999999], {
            hintContent: 'Нажми на меня!',
            balloonContentHeader: '<div class="map-box__section">Офис:</div>',
            balloonContentBody: '<div class="map-box__adress">ул. Апрельская, 4</div>'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageSize: [58, 80], // размер картинки
            iconImageHref: 'img/svg/pin.svg', // ссылка на картинку.
            iconImageOffset: [-29, -80] // пододвинул pin в нужное место
        }
    );
    map.geoObjects.add(placemark); // добавил placemark на карту
}
// == /yandex map ==

// == burger-menu ==
let menuBtn = document.querySelector('.mobile-menu__button');
let menu = document.querySelector('.mobile-menu');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('mobile-menu__button_opened');
    menu.classList.toggle('mobile-menu_opened');
    body.classList.toggle('hidden');
});

// == /burger-menu ==