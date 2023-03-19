var overlay = document.querySelector(".ls-overlay");
var frameImage = document.querySelector(".ls-gallery-frame-image");
var frameContainer = document.querySelector(".ls-gallery-frame-container");
var galleryImages = document.querySelectorAll(".ls-thumb-img");
var closeGallery = document.querySelectorAll(".ls-toggle-gallery");

const getImgSrc = function () {
  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
      var imageSrc = this.getAttribute("src");
      frameImage.setAttribute("src", imageSrc);

      overlay.classList.toggle("ls-is-open");
      frameContainer.classList.toggle("ls-is-open");
    });
  }
};
getImgSrc();
for (var c = 0; c < closeGallery.length; c++) {
  closeGallery[c].addEventListener("click", function () {
    overlay.classList.toggle("ls-is-open");
    frameContainer.classList.toggle("ls-is-open");
  });
}
