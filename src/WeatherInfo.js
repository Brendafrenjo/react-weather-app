import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview pt-4 pb-4">
        <ul>
          <li className="city-name pb-3">{props.data.city}</li>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li class="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="alpha">
        <div className="row">
          <div className="col-sm-7">
            <div className="d-flex weather-temperature">
              <WeatherIcon code={props.data.icon} className="icon" />
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
          </div>
          <div className="col-sm-5 mt-3">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
