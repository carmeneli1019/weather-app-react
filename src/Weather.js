import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  let weatherData = {
    city: "Lisbon",
    temperature: 23,
    date: "Last updated: Tuesday, 15:10",
    description: "Few clouds",
    humidity: 56,
    wind: 18,
    feelsLike: 21,
  };

  const defaults = {
    icon: "CLEAR_DAY",
    color: "rgba(20, 40, 80, 1)",
    size: 32,
    animate: true,
  };

  return (
    <div className="Weather">
      <div className="row">
        <h3>{weatherData.city}</h3>
      </div>
      <div className="row">
        <div className="col">
          <div className="clearfix">
            <div className="float-left">
              <ReactAnimatedWeather
                icon={defaults.icon}
                color={defaults.color}
                size={40}
                animate={defaults.animate}
              />
              <h1>
                <span>{weatherData.temperature}</span>
              </h1>
              <span className="units">
                <a href="/">ºC </a>|<a href="/"> ºF</a>
              </span>
            </div>
          </div>
          <p>{weatherData.date}</p>
          <p>{weatherData.description}</p>
        </div>

        <div className="col">
          <p>Wind: {weatherData.wind} km/h</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Feels like: {weatherData.feelsLike} ºC</p>
        </div>
      </div>
    </div>
  );
}
