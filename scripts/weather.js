document.addEventListener('DOMContentLoaded', () => {
    const temp = 10; // Static temperature
    const windSpeed = 5; // Static wind speed

    function calculateWindChill(temp, windSpeed) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1);
    }

    const windChill =
        temp <= 10 && windSpeed > 4.8
            ? calculateWindChill(temp, windSpeed)
            : "N/A";

    document.getElementById('wind-chill').textContent = windChill;
    document.getElementById('last-modified').textContent = new Date(
        document.lastModified
    ).toLocaleString();
});
