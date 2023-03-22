var overlay = document.querySelector(".ls-overlay");
var frameImage = document.querySelector(".ls-gallery-frame-image");
var frameContainer = document.querySelector(".ls-gallery-frame-container");
var galleryImages = document.querySelectorAll(".ls-thumb-img");
var closeGallery = document.querySelectorAll(".ls-toggle-gallery");
var btnNext = document.querySelector(".ls-item-next");
var btnPrev = document.querySelector(".ls-item-prev");
var currCounter = document.querySelector(".ls-current-slide");
var totalCounter = document.querySelector(".ls-total-slide");
var postGallery = document.querySelector(".ls-post-gallery");
var postGalleryHeight = postGallery.clientHeight;

postGallery.style.height = postGalleryHeight - 270 + "px";
var contadorFormato = function (x) {
  if (x < 10) {
    return "0" + x;
  } else {
    return x;
  }
};

totalCounter.innerHTML = contadorFormato(galleryImages.length);

const getImgSrc = function () {
  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
      var imageSrc = this.getAttribute("src");
      var itemNum = this.getAttribute("data-item");
      frameImage.setAttribute("src", imageSrc);
      frameImage.setAttribute("data-index", itemNum);

      overlay.classList.toggle("ls-is-open");
      frameContainer.classList.toggle("ls-is-open");
      currCounter.innerHTML = contadorFormato(itemNum);
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

const nextItem = function () {
  //Identificar o item atual no Frame
  var currItemNum = parseInt(frameImage.getAttribute("data-index"));

  //Definir número do próximo item
  var nextItemNum = currItemNum + 1;

  // Loop com o item que é igual ao nextItemNum
  for (var n = 0; n < galleryImages.length; n++) {
    var item = galleryImages[n];
    var itemNum = parseInt(item.getAttribute("data-item"));

    if (nextItemNum == itemNum) {
      //Capturar o SRC
      var nextSrc = item.getAttribute("src");
      var nextIndex = item.getAttribute("data-item");

      //Passar o SRC no img do frame
      frameImage.setAttribute("src", nextSrc);
      frameImage.setAttribute("data-index", nextIndex);
      currCounter.innerHTML = contadorFormato(nextIndex);
    }
  }
};

const prevItem = function () {
  //Identificar o item atual no Frame
  var currItemNum = parseInt(frameImage.getAttribute("data-index"));

  //Definir número do próximo item
  var prevItemNum = currItemNum - 1;

  // Loop com o item que é igual ao nextItemNum
  for (var p = 0; p < galleryImages.length; p++) {
    var item = galleryImages[p];
    var itemNum = parseInt(item.getAttribute("data-item"));

    if (prevItemNum == itemNum) {
      //Capturar o SRC
      var prevSrc = item.getAttribute("src");
      var prevIndex = item.getAttribute("data-item");

      //Passar o SRC no img do frame
      frameImage.setAttribute("src", prevSrc);
      frameImage.setAttribute("data-index", prevIndex);
      currCounter.innerHTML = contadorFormato(prevIndex);
    }
  }
};

btnNext.addEventListener("click", function () {
  nextItem();
});

btnPrev.addEventListener("click", function () {
  prevItem();
});
