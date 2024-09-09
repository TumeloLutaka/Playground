// JavaScript to insert current year
const yearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

