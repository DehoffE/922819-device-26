var page = {
  buttons: {
    dropdownShow: document.querySelector('.navigation__button'),
    sliderControls: document.querySelectorAll('.slider-controls__button'),
    showContactsModal: document.querySelector('.contacts__button'),
    showMapModal: document.querySelector('.contacts__map')
  }
}

function showContactsModal() {
  var closeModal = document.querySelector('#modal-contacts-close');
  var contactsModal = document.querySelector('.contacts-modal');
  closeModal.addEventListener('click', function(){
      contactsModal.classList.remove('contacts-modal--open');
  });
  contactsModal.classList.add('contacts-modal--open');
}

function showMapModal() {
  var closeModal = document.querySelector('#modal-map-close');
  var mapModal = document.querySelector('.map-modal');
  closeModal.addEventListener('click', function(){
      mapModal.classList.remove('map-modal--open');
  });
  mapModal.classList.add('map-modal--open');
}

function sliderControlHandler() {
    var slides = document.querySelector('.slider__cards');

    return function(e) {
        if (e.target === page.buttons.sliderControls[0]) {
            slides.style.transform = 'translateY(' + 0 + 'px)';
        } else if (e.target === page.buttons.sliderControls[1]) {
            slides.style.transform = 'translateY(' + -600 + 'px)';
        } else if (e.target === page.buttons.sliderControls[2]) {
            slides.style.transform = 'translateY(' + -1200 + 'px)';
        }
    }
}

function dropdownShowHandler() {
    var hidden = true;
    var dropdown = document.querySelector('.dropdown');

    return function(e) {
        if (hidden) {
            dropdown.style.display = 'flex';
            hidden = false;
        } else {
            dropdown.style.display = 'none';
            hidden = true;
        }
    }
}

page.buttons.dropdownShow.addEventListener('click', dropdownShowHandler());

for (var i = 0; i < page.buttons.sliderControls.length; i++) {
    page.buttons.sliderControls[i].addEventListener('click', sliderControlHandler());
}


page.buttons.showContactsModal.addEventListener('click', showContactsModal);
page.buttons.showMapModal.addEventListener('click', showMapModal);
