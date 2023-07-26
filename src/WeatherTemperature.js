import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="temperature">{Math.round(props.celcius)}</span>
      <span className="degree-sign">°C</span>
    </div>
  );
}
