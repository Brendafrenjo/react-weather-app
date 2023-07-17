import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="weather-forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-content pb-2">Sun</div>
            <WeatherIcon code="clear-sky-day" size={32} />
            <div className="forecast-content pt-2">
              <span className="weather-forecast-temperature-max">25°</span>
              <span className="weather-forecast-temperature-min">15°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
