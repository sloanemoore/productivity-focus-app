import React, { useState, useEffect } from "react";
import capitalizeCity from "./capitalizeCity.js";

export default function retrieveWeather(
  city,
  setCity,
  state,
  setState,
  weather,
  setWeather,
  setWeatherImage,
  setWeatherTemp
) {
  if (!city) {
    return;
  }
  const weatherCity = city.toLowerCase().trim();
  const weatherState = state.toLowerCase().trim();

  fetch(
    `/.netlify/functions/openweather_api?weatherCity=${weatherCity}&weatherState=${weatherState}`
  )
    .then((response) => response.json())
    .then((data) => {
      setWeather(data);
      if (data.message === "city not found") {
        return;
      } else {
        const weatherCity = capitalizeCity(city);
        setCity(weatherCity);
        setState(state.toUpperCase());
        setWeatherImage(data.list[0].weather[0].icon);
        setWeatherTemp(data.list[0].main.temp);
      }
    })
    .catch((error) => {
      console.log(error);
      setWeather({cod: "404", message: "city not found"})
    });
}
