const swiperValue= new Swiper(".value-slider", {
  loop:true,
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 35,
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
  },
});

const play = document.querySelector(".button-play");
const video = document.querySelector("video");
play.addEventListener("click", () => {
  document.querySelector(".video-thumbnail").classList.add("hidden");
  video.play();
});

const swiperOurStaff= new Swiper(".our-staff-slider", {
  loop:true,
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      autoplay: false,
      slidesPerView: 4,
      spaceBetween: 26,
    },
  },
});