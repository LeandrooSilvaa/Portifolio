//Declarando Variáveis
var btnContact = document.querySelector(".ls-btn-contact");
var toggleModal = document.querySelectorAll(".ls-toggle-modal");

//Page Preloader
window.addEventListener("load", function () {
  var pagePreloder = document.querySelector(".ls-preloader");

  pagePreloder.classList.add("ls-fade-out");
  setTimeout(function () {
    pagePreloder.style.display = "none";
  }, 2000);
});

//Abrindo e fechando informações de contato
btnContact.addEventListener("click", function () {
  var boxContact = document.querySelector(".ls-contact-info");

  boxContact.classList.toggle("ls-is-open");

  this.classList.toggle("ls-change-icon");
});

/* Abrindo e fechando  modal de orçamento */

for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    var overlay = document.querySelector(".ls-overlay");
    var modalOrcamento = document.querySelector("#ls-modal-orcamento");

    overlay.classList.toggle("ls-is-open");
    modalOrcamento.classList.toggle("ls-is-open");
    modalOrcamento.classList.toggle("ls-slide-top-in");
  });
}

var postGallery = document.querySelector(".ls-post-gallery");
var postGalleryHeight = postGallery.clientHeight;

postGallery.style.height = postGalleryHeight - 270 + "px";

/*Animando elementos com scroll */

var myScrollDown = document.querySelector(".ls-scroll-down");
var myTopBar = document.querySelector(".ls-topbar");
var waypoint = new Waypoint({
  element: document.querySelector(".ls-btn-contact"),
  handler: function () {
    myTopBar.classList.toggle("ls-fade-out-bar");
  },
  offset: "85%",
});
var waypoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("ls-fade-out");
  },
  offset: "85%",
});
