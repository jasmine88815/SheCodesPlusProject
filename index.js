let city = "London";
let apiKey = "04ob736aa4t08e640af8d42f31cbf09f";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

function currentCityTemp(response) {
  let bigTemp = document.querySelector("#main-temp");
  let dataTemp = Math.round(response.data.temperature.current);
  bigTemp.innerHTML = `${dataTemp}`;

  let icon = document.querySelector("#logo");
  if (89 < dataTemp) {
    icon.innerHTML = `☀️`;
  } else {
    if (dataTemp < 70) {
      icon.innerHTML = `☁️`;
    } else {
      icon.innerHTML = `🌤️`;
    }
  }
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = city;

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  
  axios.get(apiUrl).then(currentCityTemp);
}


let currentDate = new Date();
let p = document.querySelector("#update-time");

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayOfWeek = weekdays[currentDate.getDay()];
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();

if (hour < 10) {
  hour = `0${hour}`;
}
if (minutes < 10) {
  minutes = `0${minutes}`;
}
p.innerHTML = `${dayOfWeek} ${hour}:${minutes}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);