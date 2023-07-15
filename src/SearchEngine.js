import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    console.log(response.data.temperature.current);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: "Last updated: Sunday 02:59",
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <form>
          <div className="row">
            <div className="col-sm-6">
              <input
                type="search"
                placeholder="Search location"
                className="form-control shadow search-location"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-btn"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="Current"
                className="btn btn-success current-btn"
              />
            </div>
          </div>
        </form>
        <div className="overview pt-4 pb-4">
          <ul>
            <li className="city-name pb-3">{weatherData.city}</li>
            <li>{weatherData.date}</li>
            <li class="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="alpha">
          <div className="row">
            <div className="col-sm-7">
              <div className="d-flex weather-temperature">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="icon"
                ></img>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="degree-sign">°C</span>
              </div>
            </div>
            <div className="col-sm-5 mt-3">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `51235ca78c321be05ft0ao3e364df4e0`;
    let city = `Nairobi`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return <p className="text-white">Loading...</p>;
  }
}
