// Show more content
const showMore = document.querySelector(".products-guide-btn");
showMore.addEventListener("click", () => {
  document.querySelector(".products-guide-content").classList.toggle("show");
  const contentBtn = showMore.querySelector("span");
  if (contentBtn.innerHTML == "Show More") {
    contentBtn.innerHTML = "Hide";
  } else contentBtn.innerHTML = "Show More";
});
