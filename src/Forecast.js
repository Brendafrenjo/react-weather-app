import React from "react";
import "./Forecast.css";

export default function Forecast() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
  return (
    <div className="Forecast">
      <div class="weather-forecast">
              <div className="row">
              {days.map(function (day, index) {
                  return (
                    <div className="col-2">
                          <div className="forecast-content" key={index}>{ day}</div>
                      <img
                        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                        alt="Weather Icon"
                        className="icon mb-3 mt-3"
                      ></img>{" "}
                      <div className="forecast-content">
                        {" "}
                        <span class="weather-forecast-temperature-max">
                          25°
                        </span>{" "}
                        <span class="weather-forecast-temperature-min">
                          15°
                        </span>
                      </div>
                    </div>
                  );
              })}    
        </div>
      </div>
    </div>
  );
}
