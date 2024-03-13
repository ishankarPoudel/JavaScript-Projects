let URL = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=a99ee436147b9375b8d8988cf47a1220&units=metric";

const generateResults = () => {
    async function fetchWeather() {
        try {
            URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputData.value}&appid=a99ee436147b9375b8d8988cf47a1220&units=metric`;
            let weatherData = await fetch(URL);
            if (!weatherData.ok) {
                throw new Error("Network Response Error");
            }
            let pureData = await weatherData.json();
            inputData.value = ""; //clear citynme from search 
            document.querySelector(".error").innerText = ""; //clear error message
            const weatherImage = document.querySelector(".image"); //
            const tempreature = document.querySelector(".tempreature");
            const cityName = document.querySelector(".smallcityname")
            const humidityData = document.querySelector(".humidity-data");
            const precipationData = document.querySelector(".precipation-data");

            if (pureData.weather[0].main === "Clear") {
                weatherImage.src = "images/sunny.png";
            } else if (pureData.weather[0].main === "Clouds") {
                weatherImage.src = "images/cloudy.png";
            } else if (pureData.weather[0].main === "Rain") {
                weatherImage.src = "images/rainy.png";
            } else if (pureData.weather[0].main === "Snow") {
                weatherImage.src = "images/snow.png";
            } else {
                weatherImage.src = "images/windy.png";
            }
            cityName.innerHTML = ` <p>${pureData.name}</p> `;
            tempreature.innerHTML = ` <p>${Math.round(pureData.main.temp)}°C</p>`
            humidityData.innerHTML = `${pureData.main.humidity}%`;
            precipationData.innerHTML = `${Math.round(pureData.main.feels_like)}°C `;

        } catch {
            document.querySelector(".error").innerText = "Invalid city name";
        }

    }

    fetchWeather();

};

// listening event listenner when search button is clicked
let inputData = document.querySelector("#cityname");
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => {
    generateResults();

});