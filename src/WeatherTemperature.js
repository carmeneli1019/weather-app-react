import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [units, setUnits] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  function fahrenheit() {
    return Math.round((props.temperature * 9) / 5 + 32);
  }

  if (units === "celsius") {
    return (
      <span className="WeatherTemperature">
        <h1>{props.temperature}</h1>
        <span className="units">
          ºC |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <h1>{fahrenheit(props.temperature)}</h1>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            ºC{" "}
          </a>
          | ºF
        </span>
      </span>
    );
  }
}
