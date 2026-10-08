async function getWeather() {
    let city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }
    
    let url = "https://geocoding-api.open-meteo.com/v1/search?name=" + city + "&count=1";
    let response = await fetch(url);
    let data = await response.json();

    if (!data.results || data.results.length === 0) {
        document.getElementById("result").innerHTML = "<p>City not found</p>";
        return;
    }

    let latitude = data.results[0].latitude;
    let longitude = data.results[0].longitude;

    let weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current=temperature_2m,relative_humidity_2m,wind_speed_10m";
    let weatherResponse = await fetch(weatherUrl);
    let weatherData = await weatherResponse.json();

    document.getElementById("result").innerHTML =
        "<h2>" + city + "</h2>" +
        "<p>Temperature: " + weatherData.current.temperature_2m + "°C</p>" +
        "<p>Humidity: " + weatherData.current.relative_humidity_2m + "%</p>" +
        "<p>Wind Speed: " + weatherData.current.wind_speed_10m + " km/h</p>";
}
