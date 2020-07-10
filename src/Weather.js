import React from "react";
import WeatherIcon from "./WeatherIcon";

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
              <h1>{props.temperature}</h1>
              <span className="units">
                <a href="/">ºC </a>|<a href="/"> ºF</a>
              </span>
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
