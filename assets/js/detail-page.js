// Click add to cart
const addToCart = document.querySelector(
  "#fhm-detail-page-side .side-btn-cart"
);
addToCart.addEventListener("click", () => {
  addToCart.innerHTML = "Go to your cart";
});

// Slide view
const picturePreview = new Swiper(".pictures-preview-slider", {
  spaceBetween: 3,
  slidesPerView: "auto",
  slideToClickedSlide: true,
  freeMode: {
    enabled: true,
    sticky: false,
    momentumBounce: false,
  },
  watchSlidesProgress: true,
  direction: "vertical",
  mousewheel: {
    enabled: true,
  },
  parallax: true,
  navigation: {
    nextEl: ".pictures-preview-next",
  },
});
const pictureView = new Swiper(".pictures-view", {
  spaceBetween: 10,
  slidesPerView: 1,
  speed: 800,
  cssMode: true,
  freeMode: false,
  pagination: {
    el: ".pictures-view-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".pictures-view-next",
    prevEl: ".pictures-view-prev",
  },
  thumbs: {
    swiper: picturePreview,
  },
});

// Show hide preview
const preview = document.querySelector(".pictures-preview ");
const modeBtn = document.querySelector(".pictures-mode-btn");
modeBtn.addEventListener("click", () => {
  preview.classList.toggle("active");
  if (modeBtn.querySelector("span").innerHTML == "Show All Pictures") {
    modeBtn.querySelector("span").innerHTML = "Hide All Pictures";
  } else {
    modeBtn.querySelector("span").innerHTML = "Show All Pictures";
  }
});
const sideHover = document.querySelector(".pictures-side-hover");
sideHover.addEventListener("mouseover", () => {
  preview.classList.add("show");
});
sideHover.addEventListener("mouseout", () => {
  preview.classList.remove("show");
});

// zoom in out
const view = document.querySelector(".pictures-view");
const zoomin = document.querySelector(".pictures-action-zoomin");
const zoomout = document.querySelector(".pictures-action-zoomout");
zoomin.addEventListener("click", () => {
  view.classList.add("zoom");
  zoomin.classList.remove("active");
  zoomout.classList.add("active");
});
zoomout.addEventListener("click", () => {
  view.classList.remove("zoom");
  zoomin.classList.add("active");
  zoomout.classList.remove("active");
});

// full screen
const fullscreenBtn = document.querySelector(".pictures-action-fullscreen");
fullscreenBtn.addEventListener("click", () => {
  document.querySelector(".side").classList.toggle("close");
  document.querySelector(".pictures").classList.toggle("full");
  fullscreenBtn.classList.toggle("full");
});
