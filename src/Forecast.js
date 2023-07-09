import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="weather-forecast">
        <div>
          <div>
            <span className="forecast-content">Sun</span>
            <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Weather Icon"
              className="icon mb-3 mt-3"
            ></img>{" "}
            <br /> <span className="forecast-content"> 25° 15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
