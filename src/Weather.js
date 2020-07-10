import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "rgba(20, 40, 80, 1)",
    size: 32,
    animate: true,
  };

  return (
    <div className="Weather">
      <div className="row">
        <h3>{props.city}</h3>
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
              <h1>{props.temperature}</h1>
              <span className="units">
                <a href="/">ºC </a>|<a href="/"> ºF</a>
              </span>
            </div>
          </div>
          <p>{props.date} </p>
          <p>{props.description}</p>
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
