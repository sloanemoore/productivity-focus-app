import React, { useEffect, useState } from "react";

export default function convertDate(date) {
  let dayOfWeek = date.substring(0, 3);
  let month = date.substring(4, 7);
  let numDate = date.substring(8, 10);
  let fullDayOfWeek;
  let fullMonth;
  if (numDate.toString()[0] === "0") {
    numDate = numDate.toString()[1];
  }
  switch (dayOfWeek) {
    case "Mon":
      fullDayOfWeek = "Monday";
      break;
    case "Tue":
      fullDayOfWeek = "Tuesday";
      break;
    case "Wed":
      fullDayOfWeek = "Wednesday";
      break;
    case "Thu":
      fullDayOfWeek = "Thursday";
      break;
    case "Fri":
      fullDayOfWeek = "Friday";
      break;
    case "Sat":
      fullDayOfWeek = "Saturday";
      break;
    case "Sun":
      fullDayOfWeek = "Sunday";
      break;
  }
  switch (month) {
    case "Jan":
      fullMonth = "January";
      break;
    case "Feb":
      fullMonth = "February";
      break;
    case "Mar":
      fullMonth = "March";
      break;
    case "Apr":
      fullMonth = "April";
      break;
    case "May":
      fullMonth = "May";
      break;
    case "Jun":
      fullMonth = "June";
      break;
    case "Jul":
      fullMonth = "July";
      break;
    case "Aug":
      fullMonth = "August";
      break;
    case "Sep":
      fullMonth = "September";
      break;
    case "Oct":
      fullMonth = "October";
      break;
    case "Nov":
      fullMonth = "November";
      break;
    case "Dec":
      fullMonth = "December";
      break;
  }
  return `${fullDayOfWeek}, ${fullMonth} ${numDate}`;
}
