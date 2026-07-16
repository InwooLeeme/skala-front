
const selectCity = document.getElementById("city");
const weatherBox = document.getElementById("weather-box");

selectCity.addEventListener("change", function() {
    const selectedCity = selectCity.value;
    getWeather(selectedCity);
});

async function getWeather(city) {
    weatherBox.innerHTML = `<p class="weather-loading">로딩 중... ⏳</p>`;

    try{
        const {latitude, longitude} = await getGeolocation(city);
        const weatherResult = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,cloud_cover`);
        const weatherData = await weatherResult.json();
        const {temperature_2m, relative_humidity_2m, cloud_cover} = weatherData.current;
        console.log(weatherData.current);
        
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

async function getGeolocation(city) {
    const cityCoordResult = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const cityCoordData = await cityCoordResult.json();

    if(!cityCoordData.results) {
        throw new Error("도시 좌표를 찾을 수 없습니다.");
    }

    const {latitude, longitude} = cityCoordData.results[0];

    return {latitude, longitude};
}
