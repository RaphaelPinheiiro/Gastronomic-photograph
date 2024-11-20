const OPENBUTTON = document.querySelector(".open-menu");
const CLOSEBUTTON = document.querySelector(".close-menu");
const BODY = document.querySelector("body");
const NAV = document.querySelector(".c-nav");

OPENBUTTON.addEventListener("click", () => {
  NAV.classList.add("nav-open");
  BODY.classList.add("no-scroll");
});

CLOSEBUTTON.addEventListener("click", () => {
  NAV.classList.remove("nav-open");
  BODY.classList.remove("no-scroll");
});

console.log(NAV);
