var dropdownShowBtn = document.querySelector('.navigation__button');
var sliderControlsBtns = document.querySelectorAll('.slider-controls__button');

function sliderControlHandler() {
    var slides = document.querySelector('.slider__cards');

    return function(e) {
        if (e.target === sliderControlsBtns[0]) {
            slides.style.transform = 'translateY(' + 0 + 'px)';
        } else if (e.target === sliderControlsBtns[1]) {
            slides.style.transform = 'translateY(' + -600 + 'px)';
        } else if (e.target === sliderControlsBtns[2]) {
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

dropdownShowBtn.addEventListener('click', dropdownShowHandler());

for (var i = 0; i < sliderControlsBtns.length; i++) {
    sliderControlsBtns[i].addEventListener('click', sliderControlHandler());
}
