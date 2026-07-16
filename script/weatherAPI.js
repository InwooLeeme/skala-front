export async function getGeolocation(city) {
    const cityCoordResult = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
    const cityCoordData = await cityCoordResult.json();

    if(!cityCoordData.results) {
        throw new Error("도시 좌표를 찾을 수 없습니다.");
    }

    const {latitude, longitude} = cityCoordData.results[0];

    return {latitude, longitude};
}

export async function getWeather(latitude, longitude) {
    const weatherResult = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,cloud_cover`);
    const weatherData = await weatherResult.json();
    return weatherData.current;
}
