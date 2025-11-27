// const cityInput = document.querySelector(".city-input");
// const searchBtn = document.querySelector(".search-btn");
// const notFoundSection = document.querySelector(".not-found");
// const searchCitySection = document.querySelector(".search-city");
// const weatherInfoSection = document.querySelector(".weather-info");
// const countryTxt = document.querySelector(".country-txt");
// const tempTxt = document.querySelector(".temp-txt");
// const conditionTxt = document.querySelector(".condition-txt");
// const humidityValueTxt = document.querySelector(".humidity-value-txt");
// const windValueTxt = document.querySelector(".wind-value-txt");
// const weatherSummaryImg = document.querySelector(".weather-summary-img");
// const currentDateTxt = document.querySelector(".current-date-txt");
// const forecastItemsContainer = document.querySelector(
//   ".forecast-items-container"
// );
// const apiKey = "7e84f0706b9b18284a19e5cb3afc8f19";

// searchBtn.addEventListener("click", () => {
//   if (cityInput.value.trim() != "") {
//     updateWeatherInfo(cityInput.value);
//     cityInput.value = "";
//     cityInput.blur();
//   }
// });

// cityInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter" && cityInput.value.trim() != "") {
//     updateWeatherInfo(cityInput.value);
//     cityInput.value = "";
//     cityInput.blur();
//   }
// });

// async function getFetchData(endPoint, city) {
//   const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
//   const response = await fetch(apiUrl);
//   return response.json();
// }
// function getWeatherIcon(id) {
//   if (id <= 232) return "thunderstorm.svg";
//   if (id <= 321) return "drizzle.svg";
//   if (id <= 531) return "rain.svg";
//   if (id <= 622) return "snow.svg";
//   if (id <= 781) return "atmosphere.svg";
//   if (id <= 800) return "clear.svg";
//   else return "clouds.svg";
// }
// function getCurrentDate() {
//   const currentDate = new Date();
//   const options = {
//     weekday: "short",
//     day: "2-digit",
//     month: "short",
//   };
//   console.log(currentDate);
//   return currentDate.toLocaleDateString("en-GB", options);
// }

// async function updateWeatherInfo(city) {
//   const weatherData = await getFetchData("weather", city);
//   if (weatherData.cod != 200) {
//     showDisplaySection(notFoundSection);
//     return;
//   }
//   console.log(weatherData);
//   const {
//     name: country,
//     main: { temp, humidity },
//     weather: [{ id, main }],
//     wind: { speed },
//   } = weatherData;
//   countryTxt.textContent = country;
//   tempTxt.textContent = Math.round(temp) + "  °C";
//   conditionTxt.textContent = main;
//   humidityValueTxt.textContent = humidity + "%";
//   currentDateTxt.textContent = getCurrentDate();
//   console.log(getCurrentDate());
//   windValueTxt.textContent = speed + " M/s";
//   weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`;
//   await updateForecastsInfo(city);

//   showDisplaySection(weatherInfoSection);
// }
// async function updateForecastsInfo(city) {
//   const forecastsData = await getFetchData("forecast", city);
//   const timeTaken = "12:00:00";
//   const todayDate = new Date().toISOString().split("T")[0];
//   forecastItemsContainer.innerHTML = " ";
//   forecastsData.list.forEach((forecastWeather) => {
//     if (
//       forecastWeather.dt_txt.includes(timeTaken) &&
//       !forecastWeather.dt_txt.includes(todayDate)
//     ) {
//       updateForecastItems(forecastWeather);
//     }
//   });
// }
// function updateForecastItems(weatherData) {
//   console.log(weatherData);
//   const {
//     dt_txt: date,
//     weather: [{ id }],
//     main: { temp },
//   } = weatherData;

//   const dateTaken=new Date(date)
//   const dateOption={
//     day:"2-digit",
//     month:'short'
//   }
//   const dateResult=dateTaken.toLocaleDateString('en-US',dateOption)

//   const forecastItem = (`
//     <div class="forecast-item">
//       <h5 class="forecast-item-date regulat-txt">${dateResult}</h5>
//       <img src="assets/weather/${getWeatherIcon(id)}" class="forecast-item-img" />
//       <h5 class="forecast-item-temp">${Math.round(temp)} °C</h5>
//     </div>
//   `);
//   forecastItemsContainer.insertAdjacentHTML("beforeend",forecastItem);

// }
// function showDisplaySection(section) {
//   [searchCitySection, notFoundSection, weatherInfoSection].forEach(
//     (sec) => (sec.style.display = "none")
//   );
//   section.style.display = "flex";
// }
const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const notFoundSection = document.querySelector(".not-found");
const searchCitySection = document.querySelector(".search-city");
const weatherInfoSection = document.querySelector(".weather-info");
const countryTxt = document.querySelector(".country-txt");
const tempTxt = document.querySelector(".temp-txt");
const conditionTxt = document.querySelector(".condition-txt");
const humidityValueTxt = document.querySelector(".humidity-value-txt");
const windValueTxt = document.querySelector(".wind-value-txt");
const weatherSummaryImg = document.querySelector(".weather-summary-img");
const currentDateTxt = document.querySelector(".current-date-txt");
const forecastItemsContainer = document.querySelector(
  ".forecast-items-container"
);
const apiKey = "7e84f0706b9b18284a19e5cb3afc8f19";

searchBtn.addEventListener("click", () => {
  if (cityInput.value.trim() != "") {
    updateWeatherInfo(cityInput.value.trim()); // Trim city input
    cityInput.value = "";
    cityInput.blur();
  }
});

cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && cityInput.value.trim() != "") {
    updateWeatherInfo(cityInput.value.trim()); // Trim city input
    cityInput.value = "";
    cityInput.blur();
  }
});

async function getFetchData(endPoint, city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  return response.json();
}

function getWeatherIcon(id) {
  // Use a more compact switch for readability/maintainability
  if (id <= 232) return "thunderstorm.svg";
  if (id <= 321) return "drizzle.svg";
  if (id <= 531) return "rain.svg";
  if (id <= 622) return "snow.svg";
  if (id <= 781) return "atmosphere.svg";
  if (id === 800) return "clear.svg"; // Exactly 800 is clear
  else return "clouds.svg"; // 801-804
}

function getCurrentDate(timestamp) {
  // Function to get the date from the API response's timestamp
  const date = timestamp ? new Date(timestamp * 1000) : new Date(); 
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };
  return date.toLocaleDateString("en-GB", options);
}

async function updateWeatherInfo(city) {
  const weatherData = await getFetchData("weather", city);
  if (weatherData.cod != 200) {
    showDisplaySection(notFoundSection);
    return;
  }
  
  const {
    name: country,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
    dt: timestamp // Get the current weather's timestamp
  } = weatherData;

  countryTxt.textContent = country;
  tempTxt.textContent = Math.round(temp) + " °C";
  conditionTxt.textContent = main;
  humidityValueTxt.textContent = humidity + "%";
  // Use the API's timestamp for the current date
  currentDateTxt.textContent = getCurrentDate(timestamp); 
  windValueTxt.textContent = speed + " M/s";
  weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`;
  
  await updateForecastsInfo(city);

  showDisplaySection(weatherInfoSection);
}

async function updateForecastsInfo(city) {
  const forecastsData = await getFetchData("forecast", city);
  // Target the midday forecast for the next 4 days
  const timeTaken = "12:00:00"; 
  const todayDate = new Date().toISOString().split("T")[0];
  let forecastCount = 0;

  forecastItemsContainer.innerHTML = " ";
  
  for (const forecastWeather of forecastsData.list) {
    if (
      forecastWeather.dt_txt.includes(timeTaken) &&
      !forecastWeather.dt_txt.includes(todayDate) &&
      forecastCount < 4 // Only show the next 4 days
    ) {
      updateForecastItems(forecastWeather);
      forecastCount++;
    }
  }
}

function updateForecastItems(weatherData) {
  const {
    dt_txt: date,
    weather: [{ id }],
    main: { temp },
  } = weatherData;

  const dateTaken = new Date(date)
  const dateOption = {
    day: "2-digit",
    month: 'short'
  }
  const dateResult = dateTaken.toLocaleDateString('en-US', dateOption)

  const forecastItem = (`
    <div class="forecast-item">
      <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
      <img src="assets/weather/${getWeatherIcon(id)}" class="forecast-item-img" />
      <h5 class="forecast-item-temp">${Math.round(temp)} °C</h5>
    </div>
  `);
  forecastItemsContainer.insertAdjacentHTML("beforeend", forecastItem);
}

function showDisplaySection(section) {
  [searchCitySection, notFoundSection, weatherInfoSection].forEach(
    (sec) => (sec.style.display = "none")
  );
  section.style.display = "flex";
}
