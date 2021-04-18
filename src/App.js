import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  faCog,
  faSun,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import convertDate from "./convertDate.js";
import determineGreeting from "./determineGreeting.js";
import retrieveWeather from "./retrieveWeather.js";
import updateWeather from "./updateWeather.js";
import ToDoList from "./ToDoList.js";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import retrieveFiveDayWeather from "./retrieveFiveDayWeather.js";

function App() {
  const [image, setImage] = useState(() => {
    const image = JSON.parse(localStorage.getItem("image"));
    if (image) {
      return image;
    } else {
      return "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";
    }
  });

  const [imageLocation, setImageLocation] = useState(() => {
    const imageLocation = JSON.parse(localStorage.getItem("imageLocation"));
    if (imageLocation) {
      return imageLocation;
    } else {
      return "Lake Atitlán, Guatemala";
    }
  });

  const [artistName, setArtistName] = useState(() => {
    const artistName = JSON.parse(localStorage.getItem("artistName"));
    if (artistName) {
      return artistName;
    } else {
      return "Mark Harpur";
    }
  });

  const [artistLink, setArtistLink] = useState(() => {
    const artistLink = JSON.parse(localStorage.getItem("artistLink"));
    if (artistLink) {
      return artistLink;
    } else {
      return "https://unsplash.com/@luckybeanz?utm_source=productivity-manager-app&utm_medium=referral";
    }
  });

  const [toDoList, setToDoList] = useState(() => {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    if (toDoList) {
      return toDoList;
    } else {
      return [];
    }
  });

  const [toDoKey, setToDoKey] = useState(() => {
    const toDoKey = JSON.parse(localStorage.getItem("toDoKey"));
    if (toDoKey) {
      return toDoKey;
    } else {
      return 0;
    }
  });

  const [focusTask, setFocusTask] = useState(() => {
    const focusTask = JSON.parse(localStorage.getItem("focusTask"));
    if (focusTask) {
      return focusTask;
    } else {
      return "";
    }
  });

  const [city, setCity] = useState(() => {
    const city = JSON.parse(localStorage.getItem("city"));
    if (city) {
      return city;
    } else {
      return "";
    }
  });

  const [state, setState] = useState(() => {
    const state = JSON.parse(localStorage.getItem("state"));
    if (state) {
      return state;
    } else {
      return "";
    }
  });

  const [name, setName] = useState(() => {
    const name = JSON.parse(localStorage.getItem("name"));
    if (name) {
      return name;
    } else {
      return "";
    }
  });

  const [weatherLocationError, setWeatherLocationError] = useState(() => {
    const weatherLocationError = JSON.parse(
      localStorage.getItem("weatherLocationError")
    );
    if (weatherLocationError) {
      return weatherLocationError;
    } else {
      return false;
    }
  });

  const [weather, setWeather] = useState(() => {
    const weather = JSON.parse(localStorage.getItem("weather"));
    if (weather) {
      return weather;
    } else {
      return {};
    }
  });

  const [fiveDayWeather, setFiveDayWeather] = useState(() => {
    const fiveDayWeather = JSON.parse(localStorage.getItem("fiveDayWeather"));
    if (fiveDayWeather) {
      return fiveDayWeather;
    } else {
      return [];
    }
  });

  const [weatherImage, setWeatherImage] = useState(() => {
    const weatherImage = JSON.parse(localStorage.getItem("weatherImage"));
    if (weatherImage) {
      return weatherImage;
    } else {
      return "";
    }
  });

  const [weatherTemp, setWeatherTemp] = useState(() => {
    const weatherTemp = JSON.parse(localStorage.getItem("weatherTemp"));
    if (weatherTemp) {
      return weatherTemp;
    } else {
      return "";
    }
  });

  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
      .substring(0, 5)
  );
  const [date, setDate] = useState(() => {
    let tempDate = new Date().toDateString();
    return convertDate(tempDate);
  });

  const [timeGreeting, setTimeGreeting] = useState(() =>
    determineGreeting(new Date().toTimeString().substring(0, 5))
  );

  const nameInputRef = useRef();

  const nameGreetingRef = useRef();

  useEffect(() => localStorage.setItem("image", JSON.stringify(image)), [
    image,
  ]);

  useEffect(
    () => localStorage.setItem("imageLocation", JSON.stringify(imageLocation)),
    [imageLocation]
  );

  useEffect(
    () => localStorage.setItem("artistName", JSON.stringify(artistName)),
    [artistName]
  );

  useEffect(
    () => localStorage.setItem("artistLink", JSON.stringify(artistLink)),
    [artistLink]
  );

  useEffect(() => localStorage.setItem("toDoList", JSON.stringify(toDoList)), [
    toDoList,
  ]);

  useEffect(() => localStorage.setItem("toDoKey", JSON.stringify(toDoKey)), [
    toDoList,
  ]);

  useEffect(
    () => localStorage.setItem("focusTask", JSON.stringify(focusTask)),
    [focusTask]
  );

  useEffect(() => localStorage.setItem("city", JSON.stringify(city)), [city]);

  useEffect(() => localStorage.setItem("state", JSON.stringify(state)), [
    state,
  ]);

  useEffect(() => localStorage.setItem("name", JSON.stringify(name)), [name]);

  useEffect(
    () =>
      localStorage.setItem(
        "weatherLocationError",
        JSON.stringify(weatherLocationError)
      ),
    [weatherLocationError]
  );

  useEffect(() => localStorage.setItem("weather", JSON.stringify(weather)), [
    weather,
  ]);

  useEffect(
    () => localStorage.setItem("weatherImage", JSON.stringify(weatherImage)),
    [weatherImage]
  );

  useEffect(
    () => localStorage.setItem("weatherTemp", JSON.stringify(weatherTemp)),
    [weatherTemp]
  );

  useEffect(
    () =>
      localStorage.setItem("fiveDayWeather", JSON.stringify(fiveDayWeather)),
    [weather]
  );

  useEffect(() => {
    if (name) {
      const nameInput = nameInputRef;
      nameInput.current.style.display = "none";
      const nameGreeting = nameGreetingRef;
      nameGreeting.current.style.display = "block";
    }
  }, []);

  useEffect(() => {
    if (
      Object.keys(weather).length !== 0 &&
      weather.message !== "city not found"
    ) {
      retrieveFiveDayWeather(weather, setFiveDayWeather);
    }
  }, [time, weather]);

  const inputTaskRef = useRef();

  useEffect(() => {
    if (focusTask) {
      const currentTarget = inputTaskRef.current;
      const currentClassName = currentTarget.className;
      const currentClassNameArr = currentClassName.split(" ");
      if (currentClassNameArr.includes("input-task-line")) {
        const newClassNameArr = currentClassNameArr.filter(
          (className) => className !== "input-task-line"
        );
        const newClassName = newClassNameArr.reduce((acc, item, index) => {
          if (index !== newClassNameArr.length - 1) {
            return acc + item + " ";
          } else {
            return acc + item + " input-task-with-focus";
          }
        }, "");
        currentTarget.className = newClassName;
      }
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let tempTime = new Date()
        .toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })
        .substring(0, 5);
      let tempDate = new Date().toDateString();
      let determineAmPmTime = new Date().toTimeString().substring(0, 5);
      setTime(tempTime);
      setDate(convertDate(tempDate));
      setTimeGreeting(determineGreeting(determineAmPmTime));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [setDate, setTime]);

  useEffect(() => nameInputRef.current.focus(), []);

  useEffect(() => {
    if (weather.message !== "city not found" && weather.list && city) {
      let determineCurrentTime = new Date().toTimeString().substring(0, 5);
      const resetTime = "00:00";

      if (determineCurrentTime === resetTime) {
        retrieveWeather(
          city,
          setCity,
          state,
          setState,
          weather,
          setWeather,
          setWeatherImage,
          setWeatherTemp
        );
      } else {
        updateWeather(
          weather,
          retrieveWeather,
          city,
          setCity,
          state,
          setWeather,
          setWeatherImage,
          setWeatherTemp
        );
      }
    }
  }, [time]);

  function handleChangeImageButtonClick(event) {
    fetch(
      "/.netlify/functions/unsplash_api"
    )
      .then((response) => response.json())
      .then((data) => {
        const newImage = data.urls.full;
        const imageLocation = data.location.title;
        const artistName = data.user.name;
        const artistLink = `${data.user.links.html}?utm_source=productivity-manager-app&utm_medium=referral`;
        if (!artistName) {
          artistName = data.user.username;
        }
        setImage(newImage);
        setImageLocation(imageLocation);
        setArtistName(artistName);
        setArtistLink(artistLink);
      })
      .catch((error) => console.log(error));
  }

  function handleWeatherCityInputChange(event) {
    setCity(event.target.value);
  }

  function handleWeatherStateInputChange(event) {
    setState(event.target.value);
  }

  function handleNameInputChange(event) {
    const tempName = event.target.value;
    setName(tempName);
  }

  function handleNameInputBlur(event) {
    if (name) {
      const nameInput = nameInputRef;
      nameInput.current.style.display = "none";
      const nameGreeting = nameGreetingRef;
      nameGreeting.current.style.display = "block";
    }
  }

  function handleNameInputOnKeyDown(event) {
    if (event.keyCode === 13 && name) {
      const nameInput = nameInputRef;
      nameInput.current.style.display = "none";
      const nameGreeting = nameGreetingRef;
      nameGreeting.current.style.display = "block";
    }
  }

  function handleNameGreetingClick(event) {
    const nameGreeting = nameGreetingRef;
    nameGreeting.current.style.display = "none";
    const nameInput = nameInputRef;
    nameInput.current.style.display = "block";
  }

  function handleFocusTaskInputChange(event) {
    const tempTask = event.target.value;
    setFocusTask(tempTask);
  }

  function handleFocusTaskInputOnKeyDown(event) {
    if (event.keyCode === 13 && focusTask) {
      const tempTask = event.target.value;
      setFocusTask(tempTask);
      const currentTarget = event.target;
      const currentClassName = currentTarget.className;
      const currentClassNameArr = currentClassName.split(" ");
      if (currentClassNameArr.includes("input-task-line")) {
        const newClassNameArr = currentClassNameArr.filter(
          (className) => className !== "input-task-line"
        );
        const newClassName = newClassNameArr.reduce((acc, item, index) => {
          if (index !== newClassNameArr.length - 1) {
            return acc + item + " ";
          } else {
            return acc + item + " input-task-with-focus";
          }
        }, "");
        currentTarget.className = newClassName;
      }
      currentTarget.blur();
    }
  }

  function handleFocusTaskOnBlur(event) {
    if (focusTask) {
      const currentTarget = event.target;
      const currentClassName = currentTarget.className;
      const currentClassNameArr = currentClassName.split(" ");
      if (currentClassNameArr.includes("input-task-line")) {
        const newClassNameArr = currentClassNameArr.filter(
          (className) => className !== "input-task-line"
        );
        const newClassName = newClassNameArr.reduce((acc, item, index) => {
          if (index !== newClassNameArr.length - 1) {
            return acc + item + " ";
          } else {
            return acc + item + " input-task-with-focus";
          }
        }, "");
        currentTarget.className = newClassName;
      }
    } else {
      const currentTarget = event.target;
      const currentClassName = currentTarget.className;
      const currentClassNameArr = currentClassName.split(" ");
      const tempClassNameArr = currentClassNameArr.filter(
        (className) => className !== "input-task-with-focus"
      );

      if (!tempClassNameArr.includes("input-task-line")) {
        const newClassName = tempClassNameArr.reduce((acc, item, index) => {
          if (index !== tempClassNameArr.length - 1) {
            return acc + item + " ";
          } else {
            return acc + item + " input-task-line";
          }
        }, "");
        currentTarget.className = newClassName;
      }
    }
  }

  const companyPopover = (
    <Popover id="popover-compamy" className="popover">
      <Popover.Title as="h3">Hi, I'm Sloane!</Popover.Title>
      <Popover.Content>
        <p>
          I enjoy making delightful software experiences that integrate
          seamlessly into people’s lives.
        </p>
        <p>Connect with me:</p>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <span className="company-popover-icon">
                  <a href="https://nowcodethis.com/" target="blank">
                    <FontAwesomeIcon
                      className="company-popover-icon"
                      icon={faExternalLinkAlt}
                    />
                    <span className="company-popover-link">Website</span>
                  </a>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="company-popover-icon">
                  <a
                    href="https://www.linkedin.com/in/sloane-moore/"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      className="company-popover-icon"
                      icon={faLinkedinIn}
                    />
                    <span className="company-popover-link">LinkedIn</span>
                  </a>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="company-popover-icon">
                  <a href="https://github.com/sloanemoore" target="blank">
                    <FontAwesomeIcon
                      className="company-popover-icon"
                      icon={faGithub}
                    />
                    <span className="company-popover-link">GitHub</span>
                  </a>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="company-popover-icon">
                  <a
                    href="https://www.facebook.com/nowcodethis/"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      className="company-popover-icon"
                      icon={faFacebookF}
                    />
                    <span className="company-popover-link">Facebook</span>
                  </a>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="company-popover-icon">
                  <a href="https://twitter.com/nowcodethis" target="blank">
                    <FontAwesomeIcon
                      className="company-popover-icon"
                      icon={faTwitter}
                    />
                    <span className="company-popover-link">Twitter</span>
                  </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </Popover.Content>
    </Popover>
  );

  const weatherPopover = (
    <Popover id="popover-weather" className="popover">
      <Popover.Title as="h3">Weather</Popover.Title>
      <Popover.Content>
        {fiveDayWeather.length !== 0 && weather.cod === "200" && (
          <table className="table">
            <tbody>
              {fiveDayWeather.map((dayWeather) => {
                let date = new Date(dayWeather.dt * 1000).toString();
                let day = date.slice(0, 3);
                let shortDate = date.slice(4, 10);
                let weatherImage = dayWeather.weather[0].icon;
                let temp = Math.round(Number(dayWeather.main.temp));
                return (
                  <tr key={dayWeather.dt}>
                    <td>
                      {day}, {shortDate}
                    </td>{" "}
                    <td>
                      {
                        <img
                          className="weather-icon"
                          src={`http://openweathermap.org/img/wn/${weatherImage}@2x.png`}
                        />
                      }
                    </td>{" "}
                    <td>{temp}°</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <hr />
        <p>Set your location:</p>
        <div>
          <input
            type="text"
            className="weather-input"
            placeholder="Enter city (Chicago)"
            value={city}
            onChange={(event) => handleWeatherCityInputChange(event)}
          ></input>
          <input
            type="text"
            className="weather-input"
            placeholder="Enter state (IL)"
            value={state}
            onChange={(event) => handleWeatherStateInputChange(event)}
          ></input>

          {Object.keys(weather).length !== 0 &&
            weather.message === "city not found" && (
              <div className="error-weather-location">Location not found</div>
            )}
          <div>
            <button
              className="btn btn-secondary popover-inner-button"
              onClick={() =>
                retrieveWeather(
                  city,
                  setCity,
                  state,
                  setState,
                  weather,
                  setWeather,
                  setWeatherImage,
                  setWeatherTemp,
                  weatherLocationError,
                  setWeatherLocationError
                )
              }
            >
              Get weather
            </button>
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );

  const customizePopover = (
    <Popover id="popover-customize" className="popover">
      <Popover.Title as="h3">Customize</Popover.Title>
      <Popover.Content>
        Set a new background image.
        <button
          className="btn btn-secondary popover-inner-button"
          onClick={handleChangeImageButtonClick}
        >
          Change image
        </button>
      </Popover.Content>
    </Popover>
  );

  const toDoPopover = (
    <Popover id="popover-todo" className="popover">
      <Popover.Title as="h3">Things To Do</Popover.Title>
      <Popover.Content className="todo-popover-body">
        <ToDoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          toDoKey={toDoKey}
          setToDoKey={setToDoKey}
        ></ToDoList>
      </Popover.Content>
    </Popover>
  );

  let weatherBlock;

  if (Object.keys(weather).length === 0) {
    weatherBlock = (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={weatherPopover}
        rootClose
      >
        <button
          id="test"
          className="one btn btn-link component-button weather-button right-copy weather-location"
        >
          Set weather
        </button>
      </OverlayTrigger>
    );
  } else if (Object.keys(weather).length !== 0 && weather.cod === "404") {
    weatherBlock = (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={weatherPopover}
        rootClose
      >
        <button className="two btn btn-link component-button weather-button right-copy weather-location">
          Set weather
        </button>
      </OverlayTrigger>
    );
  } else if (
    Object.keys(weather).length !== 0 &&
    weather.message !== "city not found"
  ) {
    let placeholder = city ? city : "Set location";
    weatherBlock = (
      <div className="top-copy right-copy weather-temp">
        <img
          className="weather-icon"
          src={`http://openweathermap.org/img/wn/${weatherImage}@2x.png`}
        />
        {Object.keys(weather).length !== 0 && Math.round(Number(weatherTemp))}°
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={weatherPopover}
          rootClose
        >
          <button className="four btn btn-link component-button weather-location float-right">
            {placeholder}
          </button>
        </OverlayTrigger>
      </div>
    );
  } else {
    weatherBlock = (
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={weatherPopover}
        rootClose
      >
        <button className="three btn btn-link component-button weather-button right-copy weather-location">
          Set weather
        </button>
      </OverlayTrigger>
    );
  }

  return (
    <>
      <div
        className="container-fluid image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="overlay container-fluid">
          <div className="row">
            <div className="col">
              <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={companyPopover}
                rootClose
              >
                <button
                  type="button"
                  className="btn btn-link component-button top-copy left-copy"
                >
                  About the Developer
                </button>
              </OverlayTrigger>
            </div>
            <div className="weather-block container-right">{weatherBlock}</div>

            <div className="container-middle">
              <div className="main-block">
                <div className="date-block">{date}</div>
                <div className="time-block">{time}</div>
                <div ref={nameInputRef} className="greeting-block">
                  {timeGreeting}
                  <input
                    className="input-name"
                    value={name}
                    placeholder="(enter your name)"
                    onChange={(event) => handleNameInputChange(event)}
                    onBlur={handleNameInputBlur}
                    onKeyDown={handleNameInputOnKeyDown}
                  ></input>
                </div>
                <div>
                  <span
                    ref={nameGreetingRef}
                    className="greeting-block"
                    style={{ display: "none" }}
                    onClick={handleNameGreetingClick}
                  >
                    {timeGreeting}, {name}
                  </span>
                </div>
                {!focusTask && (
                  <div className="today-question-block">
                    What is your main focus for today?
                  </div>
                )}
                {focusTask && <div className="today-block">Today</div>}
                <div className="task-block">
                  <input
                    ref={inputTaskRef}
                    className="input-task input-task-line"
                    value={focusTask}
                    onChange={(event) => handleFocusTaskInputChange(event)}
                    onBlur={(event) => handleFocusTaskOnBlur(event)}
                    onKeyDown={(event) => handleFocusTaskInputOnKeyDown(event)}
                  ></input>
                </div>
              </div>
            </div>

            <div className="container-top-bottom">
              <div className="customize-block container-left">
                <div className="left-copy">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={customizePopover}
                    rootClose
                  >
                    <span className="gear-icon">
                      <FontAwesomeIcon icon={faCog} />
                    </span>
                  </OverlayTrigger>
                  {imageLocation}
                </div>
                <div className="bottom-copy left-copy image-attribution">
                  Photo by <a href={artistLink}>{artistName}</a> on{" "}
                  <a href="https://unsplash.com/?utm_source=productivity-manager-app&utm_medium=referral">
                    Unsplash
                  </a>
                </div>
              </div>
              <div className="todo-block container-right">
                <div className="right-copy temp-todo-copy">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={toDoPopover}
                    rootClose
                  >
                    <button
                      type="button"
                      className="btn btn-link component-button weather-location float-right"
                    >
                      To Do List
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
