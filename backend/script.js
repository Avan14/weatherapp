const apikey = "81dc1cc0ec48a06ef9d36248cc7f99ce";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const search_btn = document.querySelector(".searchbutton");
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity-per");
const wind = document.querySelector(".wind-speed");
const weather = document.querySelector(".weather-img");
const searchbox = document.querySelector(".searchbox");

async function check(cityname) {
    try {
        const response = await fetch(`${apiurl}${cityname}&appid=${apikey}&units=metric`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();

        city.innerHTML = data.name;
        temp.innerHTML = `${data.main.temp.toFixed(1)}°C`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} Kmph`;

        console.log(data);
        

        weather.src = `weather-app-img/images/${data.weather[0].main}.png`;
    } catch (error) {
        console.error("Error fetching weather data: ", error);
        city.innerHTML = "City not found";
        temp.innerHTML = "-";
        humidity.innerHTML = "-";
        wind.innerHTML = "-";
        weather.src = "";
    }
}

search_btn.addEventListener("click", () => {
    check(searchbox.value);
});
