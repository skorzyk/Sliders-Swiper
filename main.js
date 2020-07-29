import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const firstSlider = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  a11y: true,
};

const secondtSlider = {
  autoplay: true,
  cubeEffect: {
    shadowOffset: 100,
    shadowScale: 1.1,
  },
  effect: 'cube',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
};

const thirdtSlider = {
  parallax: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const fourthtSlider = {
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 20,
    depth: 500,
  },
  autoplay: true,
  centeredSlides: true,
  loopedSlides: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slidesPerView: 'auto',
};

new Swiper('.swiper-container-first', firstSlider);
new Swiper('.swiper-container-second', secondtSlider);
new Swiper('.swiper-container-third', thirdtSlider);
new Swiper('.swiper-container-fourth', fourthtSlider);
