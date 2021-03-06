var sliderCards = document.querySelector('.slider__cards');
var sliderControls = document.querySelectorAll('.slider-controls__button');
var contactsModal = document.querySelector('.contacts-modal');
var openContacts = document.querySelector('.contacts__button');
var openMap = document.querySelector('.contacts__map');
var mapModal = document.querySelector('.map-modal');
var servicesButtons = document.querySelectorAll('.services__tab label');

for (var i = 0; i < servicesButtons.length; i++) {
  servicesButtons[i].addEventListener('click', function(i) {
    var servicesList = document.querySelector('.services__descriptions');
    return function(e) {
      console.log(e.target);
      if (e.target.classList.contains('services__button')) {
        return;
      } else {
        var current = document.querySelector('.services__button');
        current.className = 'button button--s';
        e.target.className = 'services__button';
        servicesList.className = 'services__descriptions services__descriptions--position_' + (i + 1);
      }
    }
  }(i));
}



for (var i = 0; i < sliderControls.length; i++) {
  sliderControls[i].addEventListener('click', function(i) {
    return function() {
      sliderCards.className = 'slider__cards slider__cards--position_' + (i + 1);
    }
  }(i));
}




openMap.addEventListener('click', function(e) {
  e.preventDefault();
  var close = mapModal.querySelector('.modal-close');
  mapModal.classList.add('map-modal--open');
  window.addEventListener('keydown', function(e){
    if (e.keyCode === 27) {
      mapModal.classList.remove('map-modal--open');
    }
  });
  close.addEventListener('click', function() {
    mapModal.classList.remove('map-modal--open');
  });
});

openContacts.addEventListener('click', function(e) {
  e.preventDefault();
  contactsModal.classList.add('contacts-modal--open');
  var name = contactsModal.querySelector('.contacts-form__field');
  name.focus();
  var close = contactsModal.querySelector('.modal-close');
  window.addEventListener('keydown', function(e){
    if (e.keyCode === 27) {
      contactsModal.classList.remove('contacts-modal--open');
    }
  });
  close.addEventListener('click', function() {
    contactsModal.classList.remove('contacts-modal--open');
  });
});
