//toggle hamburger
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".nav__menu");

navMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
});
