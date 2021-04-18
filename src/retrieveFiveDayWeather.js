import React from "react";

export default function retrieveFiveDayWeather(weather, setFiveDayWeather) {
  let dailyTempArr = [];
  let matchDateTimestamp = weather.list[0].dt;
  let matchDateString = new Date(matchDateTimestamp * 1000).toString();
  let matchDate = matchDateString.substring(4, 15);
  for (let i = 0; i < weather.list.length; i++) {
    let weatherDateTimestamp = weather.list[i].dt;
    let weatherDateString = new Date(weatherDateTimestamp * 1000).toString();
    let weatherDate = weatherDateString.substring(4, 15);
    let weatherDateTime = weatherDateString.substring(16, 24);
    if (
      weatherDate === matchDate &&
      weatherDateTime >= "12:00:00" &&
      dailyTempArr.length < 5
    ) {
      let weatherDayOfWeek = weatherDateString.substring(0, 3);
      dailyTempArr.push(weather.list[i]);
      matchDate = new Date(matchDate);
      matchDate = new Date(matchDate.setDate(matchDate.getDate() + 1))
        .toString()
        .substring(4, 15);
    }
  }
  setFiveDayWeather(dailyTempArr);
}
