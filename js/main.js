//Declarando Variáveis
var btnContact = document.querySelector(".ls-btn-contact");
var toggleModal = document.querySelectorAll(".ls-toggle-modal");
var toggleMenu = document.querySelectorAll(".ls-toggle-menu");
var menuMobile = document.querySelector(".ls-menu-mob");
var btnMenuMobIcon = document.querySelector(".ls-btn-menu-mob ion-icon")

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

  boxContact.classList.toggle("ls-is-open-contact");
  boxContact.classList.add("contactBox");

  this.classList.toggle("ls-change-icon");
});

/* Abrindo e fechando  menu mobile */

for (var m = 0; m < toggleMenu.length; m++) {
  toggleMenu[m].addEventListener("click", function () {
    var overlayMenu = document.querySelector(".ls-menu-overlay");
    overlayMenu.classList.toggle("ls-is-open");
    menuMobile.classList.toggle("ls-menu-is-close");
    menuMobile.classList.toggle("ls-menu-is-open");
    
    var icons = btnMenuMobIcon.getAttribute("name");

    if(icons === "menu"){
      btnMenuMobIcon.setAttribute("name","close")
    }else{
      btnMenuMobIcon.setAttribute("name","menu")
    }

  });
}
/* Abrindo e fechando  modal de orçamento */

for (var i = 0; i < toggleModal.length; i++) {
  toggleModal[i].addEventListener("click", function () {
    
    var modalOrcamento = document.querySelector("#ls-modal-orcamento");
    var overlay = document.querySelector(".ls-overlay");
    overlay.classList.toggle("ls-is-open");
    modalOrcamento.classList.toggle("ls-is-open");
    modalOrcamento.classList.toggle("ls-slide-top-in");
  });
}

/*Animando elementos com scroll */

var myScrollDown = document.querySelector(".ls-scroll-down");
var myTopBar = document.querySelector(".ls-topbar");
var menuPoint = new Waypoint({
  element: document.querySelector(".ls-btn-contact"),
  handler: function () {
    myTopBar.classList.toggle("ls-fade-out-bar");
  },
  offset: "85%",
});
var arrowPoint = new Waypoint({
  element: myScrollDown,
  handler: function () {
    myScrollDown.classList.toggle("ls-fade-out");
  },
  offset: "85%",
});
