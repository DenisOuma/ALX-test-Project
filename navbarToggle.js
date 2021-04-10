// Navbar Toggler click event function
const toggleNavbar = document.querySelector(".toggle-navbar");
const navbarMenu = document.querySelector(".navbar ul");

// click Event FunctiontoggleNavbar
toggleNavbar.addEventListener("click", togglerClick);

function togglerClick(){
  toggleNavbar.classList.toggle("open-navbar");
  navbarMenu.classList.toggle("open");
}