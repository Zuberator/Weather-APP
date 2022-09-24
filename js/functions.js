// CHANGE BACKGROUND BASED ON DAY OR NIGHT
// ADD ANIMATIONS

const card = document.getElementById("card");

const town = document.getElementById("town");
const address = document.getElementById("address");
const temperature = document.getElementById("temperature");
const tempmin = document.getElementById("tempmin");
const tempmax = document.getElementById("tempmax");

const conditions = document.getElementById("conditions");
const description = document.getElementById("description");

const rain_sum = document.getElementById("rain_sum");
const snowfall_sum = document.getElementById("snowfall_sum");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const weathercode = document.getElementById("weathercode");
const windspeed = document.getElementById("windspeed");
const cloudcover = document.getElementById("cloudcover");
const feelslike = document.getElementById("feelslike");

const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const uvindex = document.getElementById("uvindex");
const icon = document.getElementById("icon");

const timezone = document.getElementById("timezone");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

const iconifyIcon = document.querySelector("iconify-icon");

let coordinates;

fetch("https://ipwho.is/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    return (coordinates = data);
  })
  .then(() => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${coordinates.city}?unitGroup=metric&key=JQKYPBD8RGRERDGGQBAYD7JEU&contentType=json`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        town.textContent = data.address;
        address.textContent = data.resolvedAddress;
        temperature.textContent = `${data.currentConditions.temp}°`;
        tempmin.textContent = `H: ${data.days[0].tempmin}°`;
        tempmax.textContent = `L: ${data.days[0].tempmax}°`;

        conditions.textContent = data.days[0].description;
        description.textContent = data.description;

        rain_sum.textContent = "Rain: " + data.currentConditions.snow;
        snowfall_sum.textContent = "Snowfall: " + data.currentConditions.snow;
        sunrise.textContent = "Sunrise: " + data.currentConditions.sunrise;
        sunset.textContent = "Sunset: " + data.currentConditions.sunset;

        weathercode.textContent = "Town: " + "Warsaw";
        windspeed.textContent =
          "Wind Speed: " + data.currentConditions.windspeed;
        cloudcover.textContent =
          "Cloudcover: " + data.currentConditions.cloudcover;
        feelslike.textContent =
          "Feels like: " + data.currentConditions.feelslike;

        humidity.textContent = "Humidity: " + data.currentConditions.humidity;
        pressure.textContent = "Pressure: " + data.currentConditions.pressure;
        uvindex.textContent = "UV Index: " + data.currentConditions.uvindex;
        icon.textContent = "Icon: " + data.currentConditions.icon;

        if (data.currentConditions.icon == "snow")
          return (iconifyIcon.icon = "twemoji:cloud-with-snow");
        if (data.currentConditions.icon == "rain")
          return (iconifyIcon.icon = "twemoji:cloud-with-rain");
        if (data.currentConditions.icon == "fog")
          return (iconifyIcon.icon = "BRAK");
        if (data.currentConditions.icon == "wind")
          return (iconifyIcon.icon = "twemoji:wind-face");
        if (data.currentConditions.icon == "cloudy")
          return (iconifyIcon.icon = "twemoji:cloud");
        if (data.currentConditions.icon == "partly-cloudy-day")
          return (iconifyIcon.icon = "twemoji:sun-behind-small-cloud");
        if (data.currentConditions.icon == "partly-cloudy-night")
          return (iconifyIcon.icon = "twemoji:cloud");
        if (data.currentConditions.icon == "clear-day")
          return (iconifyIcon.icon = "twemoji:sun");
        if (data.currentConditions.icon == "clear-night")
          return (iconifyIcon.icon = "twemoji:new-moon");

        timezone.textContent = "Timezone: " + data.timezone;
        latitude.textContent = `Latitude: ${data.latitude}°`;
        longitude.textContent = `Longitude: ${data.longitude}°`;

        let r = 0 + data.currentConditions.temp * 10;
        let g = 255 - Math.abs(10 * data.currentConditions.temp);
        let b = 255 - data.currentConditions.temp * 10;
        card.style.background = `rgb(${r}, ${g}, ${b})`;
      });
  });

// First().then(() => {Second();});

// function First() {
//   return fetch("http://ip-api.com/json/")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       return (coordinates = data);
//     });
// }

// function Second() {
//   fetch(
//     `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${coordinates.city}?unitGroup=metric&key=JQKYPBD8RGRERDGGQBAYD7JEU&contentType=json`
//   )
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       town.textContent = data.address;
//       address.textContent = data.resolvedAddress;
//       temperature.textContent = `${data.currentConditions.temp}°`;
//       tempmin.textContent = `H: ${data.days[0].tempmin}°`;
//       tempmax.textContent = `L: ${data.days[0].tempmax}°`;

//       conditions.textContent = data.days[0].description;
//       description.textContent = data.description;

//       rain_sum.textContent = "Rain: " + data.currentConditions.snow;
//       snowfall_sum.textContent = "Snowfall: " + data.currentConditions.snow;
//       sunrise.textContent = "Sunrise: " + data.currentConditions.sunrise;
//       sunset.textContent = "Sunset: " + data.currentConditions.sunset;

//       weathercode.textContent = "Town: " + "Warsaw";
//       windspeed.textContent = "Wind Speed: " + data.currentConditions.windspeed;
//       cloudcover.textContent =
//         "Cloudcover: " + data.currentConditions.cloudcover;
//       feelslike.textContent = "Feels like: " + data.currentConditions.feelslike;

//       humidity.textContent = "Humidity: " + data.currentConditions.humidity;
//       pressure.textContent = "Pressure: " + data.currentConditions.pressure;
//       uvindex.textContent = "UV Index: " + data.currentConditions.uvindex;
//       icon.textContent = "Icon: " + data.currentConditions.icon;

//       timezone.textContent = "Timezone: " + data.timezone;
//       latitude.textContent = `Latitude: ${data.latitude}°`;
//       longitude.textContent = `Longitude: ${data.longitude}°`;

//       let r = 0 + data.currentConditions.temp * 10;
//       let g = 255 - Math.abs(10 * data.currentConditions.temp);
//       let b = 255 - data.currentConditions.temp * 10;
//       card.style.background = `rgb(${r}, ${g}, ${b})`;
//     });
// }
