import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [temp, setTemp] = useState("metrics");

  function showFahrenheit(event) {
    event.preventDefault();
    setTemp("imperial");
  }

  function showCelcius(event) {
    event.preventDefault();
    setTemp("metrics");
  }

  if (temp === "metrics") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="degree-sign">
          °C |{" "}
          <a
            href="/"
            onClick={showFahrenheit}
            className="link-offset-2 link-underline link-underline-opacity-0"
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="degree-sign">
          <a
            href="/"
            onClick={showCelcius}
            className="link-offset-2 link-underline link-underline-opacity-0"
          >
            °C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
