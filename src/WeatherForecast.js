import React, { useState } from "react";
import axios from "axios";

import HourlyForecast from "./HourlyForecast";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.list.slice(0, 6).map(function (forecastItem) {
            return <HourlyForecast data={forecastItem} />;
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "09136c24d8444755f87419ea9e97055a";
    let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${props.city}&apikey=${apiKey}&units=${props.units}`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
