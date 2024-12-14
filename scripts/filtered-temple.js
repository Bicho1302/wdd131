// Corrected temples array
const temples = [
    {
        name: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        size: 11500,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        name: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1877, May, 17",
        size: 74700,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        name: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        size: 96630,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        name: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2021, May, 23",
        size: 6800,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        name: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        size: 126000,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        name: "Provo City Center",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        size: 85000,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        name: "Seattle Washington",
        location: "Bellevue, Washington, United States",
        dedicated: "1980, November, 17",
        size: 96500,
        image: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        name: "Tokoy Japan",
        location: "Tokyo, Japan",
        dedicated: " 27 October 1980",
        size: "54000",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
        name: "Paris France",
        location: "Paris,France",
        dedicated: "2017, May, 21",
        size: "44000",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    },
    {
        name: "Dallas Texas",
        location: "Dallas, Texas",
        dedicated: " 1984, October, 24",
        size: "44000",
        image: "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
    }
];

// Get the container where temples will be rendered
const container = document.getElementById("temples-container");

// Function to render all temples
function renderTemples(filteredTemples, className = "") {
    container.innerHTML = ""; // Clear the container
    filteredTemples.forEach((temple) => {
        const card = document.createElement("div");
        card.classList.add("temple-card");
        if (className) {
            card.classList.add(className); // Add class for special sections like 'small' or 'large'
        }
        card.innerHTML = `
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Size:</strong> ${temple.size} sq ft</p>
        `;
        container.appendChild(card);
    });
}

// Function to filter temples based on menu options
function filterTemples(filter) {
    let filteredTemples = [];
    let className = ""; // Optional class for styling

    switch (filter) {
        case "all":
            filteredTemples = temples;
            break;
        case "old":
            filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) < 1900);
            className = "old-small-images"; 
            break;
        case "new":
            filteredTemples = temples.filter((temple) => parseInt(temple.dedicated.split(",")[0]) > 2000);
            break;
        case "large":
            filteredTemples = temples.filter((temple) => temple.size > 90000);
            className = "small-images"; // Smaller image size for 'large'
            break;
        case "small":
            filteredTemples = temples.filter((temple) => temple.size < 10000);
            className = "more-small-images"; // Smaller image size for 'small'
            break;
        default:
            filteredTemples = temples;
    }

    renderTemples(filteredTemples, className);
}

// Initial render with all temples
renderTemples(temples);
