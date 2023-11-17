// Toggle mobile filter
const openNavButton = document.querySelector(
  "#fhm-information .information-toggle-button"
);

const closeNavButton = document.querySelector(
  "#fhm-information .information-side-close"
);

const navList = document.querySelector("#fhm-information .information-side");

openNavButton.addEventListener("click", () => {
  navList.classList.add("active");
});

closeNavButton.addEventListener("click", () => {
  navList.classList.remove("active");
});
