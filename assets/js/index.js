const buttonsCollapseMenu = document.querySelectorAll(".close-sub-nav");
Array.from(buttonsCollapseMenu).forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement
      .querySelector(".nav-item")
      .classList.toggle("nav-item-bold");
    console.log(button.parentElement);
  });
});

const inputs = document.querySelectorAll("input");
Array.from(inputs).forEach((input) => {
  const placeHolderCurrent = input.getAttribute("placeholder");
  input.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
    const clearInput = this.parentElement.querySelector(".clear-input");

    if (clearInput) {
      //Xử lý sự kiện khi thay đổi input hiển thị nút X
      clearInput.classList.remove("d-none");
      this.addEventListener("input", function () {
        if (this.value == "") {
          clearInput.querySelector(".clear-input svg path").style.fill =
            "#c8c8c8";
        } else {
          clearInput.querySelector(".clear-input svg path").style.fill = "#000";
        }
      });

      //Xử lý sự kiện khi clear input
      clearInput.addEventListener("click", () => {
        clearInput.previousElementSibling.value = "";
        clearInput.querySelector("svg path").style.fill = "#c8c8c8";
        input.focus();
      });
    }
    this.addEventListener("focusout", function (e) {
      this.setAttribute("placeholder", placeHolderCurrent);
      if (this.value == "") {
        this.style.outline = "none";
      }
    });

    //Xử lý sự kiện khi click ra ngoài ô input khác
    window.addEventListener("click", (e) => {
      if (
        e.target.parentElement == input.parentElement ||
        e.target.parentElement.parentElement == input.parentElement ||
        e.target.parentElement.parentElement.parentElement ==
          input.parentElement
      ) {
        return false;
      } else {
        if (clearInput) {
          clearInput.classList.add("d-none");
        }
      }
    });
  });
});

// password show/hide
const passwordInputs = document.querySelectorAll(".password-input");
Array.from(passwordInputs).forEach((passwordInput) => {
  passwordInput.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");
    console.log(input.type);
    if (input.type == "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});

//quantity
const plusbtn = document.querySelectorAll(".plus");
plusbtn.forEach((plus) => {
  plus.addEventListener("click", () => {
    const quantity = plus.parentElement.querySelector(".qty");
    if (quantity.value) {
      quantity.value = parseInt(quantity.value) + 1;
    } else quantity.value = 0;
  });
});
const minusbtn = document.querySelectorAll(".minus");
minusbtn.forEach((minus) => {
  minus.addEventListener("click", () => {
    const quantity = minus.parentElement.querySelector(".qty");
    if (parseInt(quantity.value) > 0) {
      quantity.value = parseInt(quantity.value) - 1;
    } else quantity.value = 0;
  });
});

// GALLERY
const galleryView = document.querySelector(".gallery-popup .gallery-view");

if (document.querySelector(".gallery-popup .gallery-thumbnail-item img")) {
  const src = document
    .querySelector(".gallery-popup .gallery-thumbnail-item.active img")
    .getAttribute("src");
  galleryView.innerHTML = `<img src="${src}"/>`;

  const galleryThumbnails = document.querySelectorAll(
    ".gallery-popup .gallery-thumbnail-item"
  );
  const galleryArr = Array.prototype.slice.call(galleryThumbnails);
  galleryArr.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(item.querySelector("img"));
      galleryArr.forEach((thumbnail) => {
        if (thumbnail !== e.target) {
          thumbnail.classList.remove("active");
        }
      });

      item.classList.add("active");

      if (item.querySelector("img")) {
        const srcView = item.querySelector("img").getAttribute("src");
        galleryView.innerHTML = `<img src="${srcView}"/>`;
      }

      if (item.querySelector("video")) {
        const srcView = item.querySelector("video").getAttribute("src");
        galleryView.innerHTML = `<video autoplay muted loop src="${srcView}"/>`;
      }
    });
  });
}

const swiperTopbar = new Swiper(".header-topbar-slider", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
});

const swiperRelated = new Swiper(".related-slider", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      autoplay: false,
      slidesPerView: 4,
      spaceBetween: 26,
    },
  },
  navigation: {
    nextEl: ".related-next",
    prevEl: ".related-prev",
  },
});

// close quick view when click add to cart
const close = document.querySelector(".quickview-close");
const quickviewPopup = new bootstrap.Modal(
  document.getElementById("fhm-quickview-popup")
);
close.addEventListener("click", () => {
  quickviewPopup.hide();
});
