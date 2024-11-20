const OPENBUTTON = document.querySelector(".js-open-menu");
const CLOSEBUTTON = document.querySelector(".js-close-menu");
const BODY = document.querySelector("body");
const NAV = document.querySelector(".js-nav");

OPENBUTTON.addEventListener("click", () => {
  NAV.classList.add("nav-open");
  BODY.classList.add("no-scroll");
});

CLOSEBUTTON.addEventListener("click", () => {
  NAV.classList.remove("nav-open");
  BODY.classList.remove("no-scroll");
});
