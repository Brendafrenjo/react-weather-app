import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <div className="row">
          <div className="col-sm-6">
            <input
              type="search"
              placeholder="Search location"
              className="form-control shadow search-location"
              autoFocus
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
          <li className="city-name pb-3">Nairobi</li>
          <li>Last updated: Sunday 02:59</li>
          <li>Broken Clouds</li>
        </ul>
      </div>
      <div className="alpha">
        <div className="row">
          <div className="col-sm-7">
            <div className="d-flex weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Weather Icon"
                className="icon"
              ></img>
              <span className="temperature">16</span>
              <span className="degree-sign">°C</span>
            </div>
          </div>
          <div className="col-sm-5 mt-3">
            <ul>
              <li>Humidity: 87%</li>
              <li>Wind: 1km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
