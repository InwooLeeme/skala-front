import { getGeolocation, getWeather } from "./weatherAPI.js";

const selectCity = document.getElementById("city");
const weatherBox = document.getElementById("weather-box");

selectCity.addEventListener("change", function() {
    const selectedCity = selectCity.value;
    renderWeather(selectedCity);
});

async function renderWeather(city) {
    weatherBox.innerHTML = `<p class="weather-loading">로딩 중... ⏳</p>`;

    try{
        const {latitude, longitude} = await getGeolocation(city);
        const {temperature_2m, relative_humidity_2m, cloud_cover} = await getWeather(latitude, longitude);

        weatherBox.innerHTML = `
            <p><strong>도시</strong><span>${city}</span></p>
            <p><strong>위도(latitude)</strong><span>${latitude}</span></p>
            <p><strong>경도(longitude)</strong><span>${longitude}</span></p>
            <p><strong>실시간 온도</strong><span>${temperature_2m}°C</span></p>
            <p><strong>실시간 습도</strong><span>${relative_humidity_2m}%</span></p>
            <p><strong>구름량</strong><span>${cloud_cover}%</span></p>
        `;
    }
    catch(error){
        weatherBox.innerHTML = `
            <p><strong>도시</strong><span>${city}</span></p>
            <p><strong>날씨</strong><span>데이터를 불러올 수 없습니다.</span></p>
        `;
    }
}
