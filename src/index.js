// import "./styles/main.scss";

// swiper

var Swipes = new Swiper(".cases__swiper", {
  loop: true,
  navigation: {
    nextEl: ".cases__swiper_wrap .cases__swiper-button-next",
    prevEl: ".cases__swiper_wrap .cases__swiper-button-prev",
  },

  pagination: {
    // el: ".swiper-pagination",
    // clickable: true,
  },
  breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1182: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
  on: {
    slideChange: function (swiper) {
      const videos = document.querySelectorAll(".news_item .video");

      videos.forEach((el) => {
        el.pause();
      });
    },
  },
});

Swipes.on('slideChange', function() {
  document.querySelector(".menu__list_1").className = 'menu__list_1';
  document.querySelector(".menu__list_1").classList.add(`active_style_${Swipes.realIndex}`);
  document.querySelector(".menu__list_2").className = 'menu__list_2';
  document.querySelector(".menu__list_2").classList.add(`active_${Swipes.realIndex}`);
});

// burger

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');

});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
