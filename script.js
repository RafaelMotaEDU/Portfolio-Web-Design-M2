const target = document.querySelectorAll("[data-animation]");
const header = document.querySelector("header");
const navBar = document.querySelector(".nav-bar");
const menu = document.querySelector("#menu-icon");
const animationClass = "animated";
const mediaQuery = window.matchMedia("(max-width: 1210px)");

// função para animar elementos html quando aparecer na tela do usuário.
function animateScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 0.75;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

// Muda a animação de apresentação dos elementos de acordo com o responsivo (media query)
function responsiveChange(mediaQuery) {
  const Viggenhorn = document.getElementById("Viggenhorn");
  const ChaosChild = document.getElementById("ChaosChild");
  const Illutopia = document.getElementById("Illutopia");
  const Snowt = document.getElementById("Snowt");
  const Avakt = document.getElementById("Avakt");

  if (mediaQuery.matches) {
    ChaosChild.dataset.animation = "right";
    Illutopia.dataset.animation = "left";
    Viggenhorn.dataset.animation = "right";
    Snowt.dataset.animation = "left";
    Avakt.dataset.animation = "right";
  } else {
    ChaosChild.dataset.animation = "top";
    Illutopia.dataset.animation = "right";
    Viggenhorn.dataset.animation = "left";
    Snowt.dataset.animation = "bottom";
    Avakt.dataset.animation = "right";
  }
}

mediaQuery.addListener(responsiveChange);
responsiveChange(mediaQuery);

function menuToggle() {
  menu.classList.toggle("bx-x");
  navBar.classList.toggle("openMenu");
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navBar.classList.remove("openMenu");
};

// Dark mode & Light mode
const html = document.documentElement;
function toggleMode() {
  html.classList.toggle("light");
}

animateScroll();

// eventlistener para mudar a header depois que o usuário descer um pouco a tela com o scroll
window.addEventListener("scroll", function () {
  header.classList.toggle("header-stuck", window.scrollY > 100);
  animateScroll();
});
