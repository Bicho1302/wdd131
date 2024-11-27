// Set the current year and last modified date dynamically
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

// JavaScript for Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('nav');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');  // Toggle the 'active' class
        hamburgerMenu.textContent = navMenu.classList.contains('active') ? '✖' : '☰';  // Toggle icon
    });
});
