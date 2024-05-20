document.addEventListener('DOMContentLoaded', () => {
    const loaderContainer = document.querySelector('.preloader');
    const pageContent = document.querySelector('#page-content');

    window.addEventListener('load', () => {
        loaderContainer.classList.add('hidden');
        pageContent.classList.add('visible');
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icons = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icons.classList.toggle('open');
}
