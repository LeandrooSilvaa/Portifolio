// Portifolio Slider

// Declarando variáveis do slider

var sliderContainer = document.querySelector(".ls-slider-container");
var sliderList = document.querySelector(".ls-slider-list");
var sliderItem = document.querySelectorAll(".ls-slider-item");
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector(".ls-item-prev");
var nextItem = document.querySelector(".ls-item-next");
var sliderPos = 0;
var currentSlide = document.querySelector(".ls-current-slide");
var totalSlide = document.querySelector(".ls-total-slide");
var contadorAtual = 1;
var navItems = document.querySelectorAll(".ls-item-navigator a");
var navCounter = document.querySelector(".ls-navigator-counter span");

// Capturando larguras individuais

var containerWidth = sliderContainer.parentElement.offsetWidth;

// Passando larguras dinamicas

sliderContainer.style.width = containerWidth + "px";

for (var p = 0; p < sliderItem.length; p++) {
  sliderItem[p].style.width = containerWidth + "px";

  var sliderItemWidth = sliderItem[p].offsetWidth;

  sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + "px";

// Fazendo animacao do slider onClink

// HANDLERS

// Contador Formato

var contadorFormato = function (x) {
  if (x < 10) {
    return "0" + x;
  } else {
    return x;
  }
};

// ContadorAdiciona

var contadorAdiciona = function () {
  if (contadorAtual >= 0 && contadorAtual < sliderTotalItems) {
    contadorAtual++;
    currentSlide.innerHTML = contadorFormato(contadorAtual);
    navCounter.innerHTML = contadorFormato(contadorAtual);
  }
};

var contadorSubtrai = function () {
  if (contadorAtual > 1 && contadorAtual <= sliderTotalItems) {
    contadorAtual--;
    currentSlide.innerHTML = contadorFormato(contadorAtual);
    navCounter.innerHTML = contadorFormato(contadorAtual);
  }
};

//Ações

var setActiveNav = function () {
  for (var nv = 0; nv < navItems.length; nv++) {
    let myNavNum = parseInt(navItems[nv].getAttribute("data-nav"));

    if (myNavNum == contadorAtual) {
      navItems[nv].classList.add("ls-item-active");

      anime({
        targets: ".ls-item-active",
        width: 90,
      });
    }
  }
};

//Set Active Slide

var setActiveSlide = function () {
  for (var sld = 0; sld < sliderItem.length; sld++) {
    let mySlideNum = parseInt(sliderItem[sld].getAttribute("data-slide"));

    if (mySlideNum == contadorAtual) {
      sliderItem[sld].classList.add("ls-slide-active");
      sliderItem[sld]
        .querySelector(".ls-portifolio-item-box")
        .classList.add("ls-scale-right");
      sliderItem[sld]
        .querySelector(".ls-portifolio-item-thumb img")
        .classList.add("ls-scale-up");
      sliderItem[sld]
        .querySelector(".ls-portifolio-item-info")
        .classList.add("ls-fade-from-left");
    }
  }
};

var changeActive = function () {
  for (var rm = 0; rm < navItems.length; rm++) {
    navItems[rm].classList.remove("ls-item-active");

    anime({
      targets: navItems[rm],
      width: 20,
    });
  }

  for (var rms = 0; rms < sliderItem.length; rms++) {
    sliderItem[rms].classList.remove("ls-slide-active");
    sliderItem[rms]
      .querySelector(".ls-portifolio-item-box")
      .classList.remove("ls-scale-right");
    sliderItem[rms]
      .querySelector(".ls-portifolio-item-thumb img")
      .classList.remove("ls-scale-up");
    sliderItem[rms]
      .querySelector(".ls-portifolio-item-info")
      .classList.remove("ls-fade-from-left");
  }

  setActiveNav();
  setActiveSlide();
};

anime({
  targets: ".ls-item-active",
  width: 90,
});

totalSlide.innerHTML = contadorFormato(sliderTotalItems);

// Volta slides
var nextSlideAnim = function () {
  var lastItem = sliderListWidth - containerWidth;
  if (-1 * sliderPos === lastItem) {
    return;
  }

  sliderPos -= containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
    easing: "cubicBezier(0,1.01,.32,1)",
  });
};

// Avança slides
var prevSlideAnim = function () {
  if (sliderPos === 0) {
    return;
  }

  sliderPos += containerWidth;
  anime({
    targets: sliderList,
    translateX: sliderPos,
    easing: "cubicBezier(0,1.01,.32,1)",
  });
};

nextItem.addEventListener("click", function () {
  nextSlideAnim();
  contadorAdiciona();
  changeActive();
});

prevItem.addEventListener("click", function () {
  prevSlideAnim();
  contadorSubtrai();
  changeActive();
});
