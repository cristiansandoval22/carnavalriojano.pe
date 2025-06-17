const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
    navMenu.classList.add("show__menu");
});

navClose.addEventListener("click", () => {
    navMenu.classList.remove("show__menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(
    ".nav__link"
) ;

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu") ;
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show__menu");
};

navLink.forEach((link) => link.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header");
    // Add a class if the bottom offset is greater than 50 of the viewport
    window.scrollY >= 50
        ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
