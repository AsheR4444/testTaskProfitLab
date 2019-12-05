// == header-button ==
const menuBtn = document.getElementById('menuBtn'); // получаем кнопку

menuBtn.addEventListener('click', function(event) {
  event.preventDefault(); // убираю дефолтное действие
  menuBtn.classList.toggle('header-button_active'); // делаю смену класса по клику
});
// == /header-button ==
