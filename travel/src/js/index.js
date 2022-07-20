/* Adaptive menu*/

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");
const navList = document.querySelector(".list");
const listItems = document.querySelectorAll(".list__item");

function switchMenu() {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  navList.classList.toggle("open");
  if (nav.classList.contains("open")) {
    hamburger = changePosition();
  } else {
    hamburger.classList.remove("change-menu");
  }
}
hamburger.addEventListener("click", switchMenu);

function changePosition() {
  setTimeout(() => {
    hamburger.classList.add("change-menu");
  }, 600);
}

function closeMenu() {
  setTimeout(() => {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navList.classList.remove("open");
    hamburger.classList.remove("change-menu");
    document.body.style.overflow = "visible";
  }, 1000);
}

listItems.forEach((el) => el.addEventListener("click", closeMenu));
