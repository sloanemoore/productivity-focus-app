import React from "react";

export default function determineGreeting(time) {
  let hour = time.substring(0, 2);
  if (hour >= 0 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}
