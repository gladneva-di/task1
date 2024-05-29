// swiper

var Swipes = new Swiper(".cases__swiper", {
  loop: true,
  speed: 500,
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

Swipes.on("slideChange", function (e) {
  document.querySelector(".menu__list_1").className = "menu__list_1";
  document.querySelector(".menu__list_1").classList.add(`active_style_${Swipes.realIndex}`);

  document.querySelector(`.swiper-slide_title${Swipes.realIndex + 1}`).style.display = "block";
  document.querySelector(`.slide${Swipes.realIndex + 1}__text-first`).style.display = "block";
  document.querySelector(`.slide${Swipes.realIndex + 1}__text-second`).style.display = "block";

  if (Swipes.realIndex === 0) {
    document.querySelector(".swiper-slide_title2").style.display = "none";
    document.querySelector(".slide2__text-first").style.display = "none";
    document.querySelector(".slide2__text-second").style.display = "none";
  } else if (Swipes.realIndex === 1) {
    document.querySelector(".swiper-slide_title1").style.display = "none";
    document.querySelector(".slide1__text-first").style.display = "none";
    document.querySelector(".slide1__text-second").style.display = "none";
  }

  document.querySelector(".menu__list_2").className = "menu__list_2";
  document.querySelector(".menu__list_2").classList.add(`active_${Swipes.realIndex}`);
});

// burger

const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// animation to scroll

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateScrollingElements() {
  const elements = document.querySelectorAll(".element-to-animate");
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("animated");
    }
  });
}
document.addEventListener("DOMContentLoaded", animateScrollingElements);
window.addEventListener("scroll", animateScrollingElements);
