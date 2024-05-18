function toggleMenu() {
    const  menu = document.querySelector(".menu-links");
    const icons = document.querySelector("hamburger-icon");
    menu.classList.toggle("open");
    icons.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");
  });
  