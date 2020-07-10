import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather(props) {
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
          <p>{props.date} </p>

          <p className="text-capitalize">{props.description}</p>
        </div>

        <div className="col">
          <p>Wind: {props.wind} km/h</p>
          <p>Humidity: {props.humidity}%</p>
          <p>Feels like: {props.feels_like} ºC</p>
        </div>
      </div>
    </div>
  );
}
