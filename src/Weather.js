import React from "react";

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

  return (
    <div className="Weather">
      <div className="row">
        <h3>{weatherData.city}</h3>
      </div>
      <div className="row">
        <div className="col">
          <div className="clearfix">
            <div className="float-left">
              <h1>
                <i className="fas fa-cloud" />
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
