import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <h1>{props.temperature}</h1>
      <span className="units">
        <a href="/">ºC </a>|<a href="/"> ºF</a>
      </span>
    </span>
  );
}
