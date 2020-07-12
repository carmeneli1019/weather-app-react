import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecast(props) {
  return (
    <div className="col">
      <p>
        {" "}
        <FormattedTime timestamp={props.data.dt * 1000} />
      </p>
      <WeatherIcon code={props.data.weather[0].icon} />
      <p>{Math.round(props.data.main.temp)} ºC </p>
    </div>
  );
}
