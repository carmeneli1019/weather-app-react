import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import FormattedTime from "./FormattedTime";

export default function Weather(props) {
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
    return `Last updated: ${weekDay}, `;
  }

  return (
    <div className="Weather">
      <div className="row">
        <h3>{props.city}</h3>
      </div>
      <div className="row">
        <div className="col">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.icon} />
              <WeatherTemperature temperature={props.temperature} />
            </div>
          </div>
          <p>
            {formatDate(props.date)} <FormattedTime timestamp={props.date} />
          </p>
          <p className="text-capitalize">{props.description}</p>
        </div>

        <div className="col">
          <p>Wind: {props.wind} km/h</p>
          <p>Humidity: {props.humidity}%</p>
          <p>Feels like: {props.feels_like} ºC</p>
        </div>
      </div>
      <WeatherForecast city={props.city} units="metric" />
    </div>
  );
}
