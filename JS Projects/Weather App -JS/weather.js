async function getWeather() {
  const city = document.getElementById("city").value;

  const apiKey = "  ";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);

  const data = await response.json();

  document.getElementById("result").innerHTML = `
    
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed}</p>
        <p>Weather: ${data.weather[0].description}</p>
    
    `;
}
