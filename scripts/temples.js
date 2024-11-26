// Set the current year and last modified date dynamically
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

// Toggle navigation menu on mobile
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navMenu = document.getElementById('navMenu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change hamburger icon to "X" when menu is open
    if (navMenu.classList.contains('active')) {
        hamburgerMenu.innerHTML = '&#10005;'; // X icon
    } else {
        hamburgerMenu.innerHTML = '&#9776;'; // Hamburger icon
    }
});
