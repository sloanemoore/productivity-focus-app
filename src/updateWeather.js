import React from "react";

export default function updateWeather(
  weather,
  retrieveWeather,
  city,
  setCity,
  state,
  setWeather,
  setWeatherImage,
  setWeatherTemp
) {
  let determineCurrentDate = new Date();
  let determineCurrentDateTimestamp = determineCurrentDate.getTime();
  let determineCurrentTime = new Date().toTimeString().substring(0, 8);
  for (let i = 0; i < weather.list.length; i++) {
    let matchTime = weather.list[i].dt;
    let matchDateTimestamp = matchTime * 1000;

    if (city && determineCurrentDateTimestamp + 2000 > matchDateTimestamp) {
      setWeatherImage(`${weather.list[i].weather[0].icon}`);
      setWeatherTemp(`${weather.list[i].main.temp}`);
    } else if (city) {
      if (determineCurrentDateTimestamp < matchDateTimestamp) {
        setWeatherImage(`${weather.list[i].weather[0].icon}`);
        setWeatherTemp(`${weather.list[i].main.temp}`);
        break;
      }
    }
  }
}
