// Function to calculate the wind chill based on temperature and wind speed
function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

// Static values for weather data
const temperature = 5; // in Celsius
const windSpeed = 10; // in km/h

// Calculate wind chill and display it
document.getElementById("wind-chill").textContent = calculateWindChill(temperature, windSpeed);

// Display the last modified date
document.getElementById("last-modified").textContent = document.lastModified;
