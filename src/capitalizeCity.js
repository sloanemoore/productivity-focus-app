import React from "react";

export default function capitalizeCity(city) {
  const weatherCityArr = city.split(" ");
  let weatherCity = "";
  for (let i = 0; i < weatherCityArr.length; i++) {
    const word = weatherCityArr[i];
    weatherCity += word[0].toUpperCase() + word.substring(1).toLowerCase();
    if (i !== weatherCityArr.length - 1) {
      weatherCity += " ";
    }
  }
  return weatherCity;
}
