const swiperSlider = new Swiper(".slider-container", {
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
});

const swiperBestSeller = new Swiper(".justin-slider", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 15,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    991: {
      autoplay: false,
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".justin-next",
    prevEl: ".justin-prev",
  },
});

const play = document.querySelector(".video-play");
const video = document.querySelector("video");
play.addEventListener("click", () => {
  document.querySelector(".video-thumbnail").classList.add("hidden");
  video.play();
});

const swiperInstagram = new Swiper(".instagram-slider", {
  direction: "horizontal",
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 2,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      autoplay: false,
      slidesPerView: 4,
      spaceBetween: 27,
    },
  },
  navigation: {
    nextEl: ".instagram-next",
    prevEl: ".instagram-prev",
  },
});

const swiperTestimonials = new Swiper(".testimonials-slider", {
  direction: "horizontal",
  slidesPerView: 3,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    991: {
      autoplay: false,
      slidesPerView: 3,
      spaceBetween: 43,
    },
  },
  navigation: {
    nextEl: ".testimonials-next",
    prevEl: ".testimonials-prev",
  },
});
