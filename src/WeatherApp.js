import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function search() {
    let units = "metric";
    const apiKey = "09136c24d8444755f87419ea9e97055a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed * 3.6),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
      feels_like: Math.round(response.data.main.feels_like),
      date: response.data.dt * 1000,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="WeatherApp" onSubmit={handleSubmit}>
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
        <WeatherInfo
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
    search();
    return <div>{form}</div>;
  }
}
