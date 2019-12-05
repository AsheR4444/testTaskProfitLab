// == yandex map ==
ymaps.ready(init);
function init() {
  let map = new ymaps.Map('map', {
    center: [55.991923665400876, 92.98853461287474],
    zoom: 16,
    controls: ['zoomControl'],
    behaviors: []
  });
  let placemark = new ymaps.Placemark( // создал placemark указав центр
    [55.9922510687489, 92.98318649999999],
    {
      hintContent: 'Нажми на меня!',
      balloonContentHeader: '<div class="map-box__section">Офис:</div>',
      balloonContentBody: '<div class="map-box__adress">ул. Апрельская, 4</div>'
    },
    {
      balloonPanelMaxMapArea: 0 // разрешил balloon выходить за карту
    }
  );
  map.geoObjects.add(placemark); // добавил placemark на карту
}
// == /yandex map ==

// == header-button ==
const menuBtn = document.getElementById('menuBtn'); // получаем кнопку

menuBtn.addEventListener('click', function(event) {
  event.preventDefault(); // убираю дефолтное действие
  menuBtn.classList.toggle('header-button_active'); // делаю смену класса по клику
});
// == /header-button ==
