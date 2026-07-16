
const selectCity = document.getElementById("city");
const weatherBox = document.getElementById("weather-box");

selectCity.addEventListener("change", function() {
    const selectedCity = selectCity.value;
    getGeolocation(selectedCity);
});

async function getGeolocation(city) {
    const cityCoordResult = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const cityCoordData = await cityCoordResult.json();

    if (!cityCoordData.results) {
        weatherBox.innerHTML = `
            <p><strong>도시</strong> <span>${city}</span></p>
            <p><strong>좌표</strong> <span>찾을 수 없음</span></p>
        `;
        return;
    }

    const {latitude, longitude} = cityCoordData.results[0];

    weatherBox.innerHTML = `
        <p><strong>도시</strong> <span>${city}</span></p>
        <p><strong>위도(latitude)</strong> <span>${latitude}</span></p>
        <p><strong>경도(longitude)</strong> <span>${longitude}</span></p>
    `;

    return {latitude, longitude};
}
