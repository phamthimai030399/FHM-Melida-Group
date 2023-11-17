// GALLERY DETAIL
const galleryViewDetail = document.querySelector(
  ".gallery-detail .gallery-view"
);

if (document.querySelector(".gallery-detail .gallery-thumbnail-item img")) {
  const src = document
    .querySelector(".gallery-detail .gallery-thumbnail-item.active img")
    .getAttribute("src");
  galleryViewDetail.innerHTML = `<img src="${src}"/>`;

  const galleryThumbnailsDetail = document.querySelectorAll(
    ".gallery-detail .gallery-thumbnail-item"
  );
  const galleryArrDetail = Array.prototype.slice.call(galleryThumbnailsDetail);
  galleryArrDetail.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(item.querySelector("img"));
      galleryArrDetail.forEach((thumbnail) => {
        if (thumbnail !== e.target) {
          thumbnail.classList.remove("active");
        }
      });

      item.classList.add("active");

      if (item.querySelector("img")) {
        const srcView = item.querySelector("img").getAttribute("src");
        galleryViewDetail.innerHTML = `<img src="${srcView}"/>`;
      }

      if (item.querySelector("video")) {
        const srcView = item.querySelector("video").getAttribute("src");
        galleryViewDetail.innerHTML = `<video autoplay muted loop src="${srcView}"/>`;
      }
    });
  });
}

const productDetailTabItems = document.querySelectorAll(".tabs-item");

//   Set active
productDetailTabItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".tabs-item.active").classList.remove("active");
    item.classList.add("active");
  });
});
