import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function SearchForm() {
  let [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    function formatString(string) {
      string = string[0].toUpperCase() + string.slice(1).toLowerCase(); //making the first letter upper case and the rest lowercase
      return string;
    }

    function formatDate(timestamp) {
      let date = new Date(timestamp);

      let weekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let weekDay = weekDays[date.getDay()];
      let time = formatTime(timestamp);
      return `Last updated: ${weekDay}, ${time}`;
    }

    function formatTime(timestamp) {
      let date = new Date(timestamp);
      let hours = date.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = date.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      return `${hours}:${minutes}`;
    }

    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: formatString(response.data.weather[0].description),
      city: response.data.name,
      feels_like: response.data.main.feels_like,
      date: formatDate(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (city) {
      let units = "metric";
      const apiKey = "09136c24d8444755f87419ea9e97055a";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(handleResponse);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <div className="row no-gutters">
        <div className="col-6">
          <input
            type="search"
            className="form-control shadow-sm"
            placeholder="Enter a city..."
            autoComplete="off"
            onChange={updateCity}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-link search-button">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="col-auto">
          <button type="reset" className="btn btn-link">
            <i className="fas fa-location-arrow" />
          </button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <Weather
          temperature={weather.temperature}
          description={weather.description}
          humidity={weather.humidity}
          wind={weather.wind}
          icon={weather.icon}
          city={weather.city}
          feels_like={weather.feels_like}
          date={weather.date}
        />
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
