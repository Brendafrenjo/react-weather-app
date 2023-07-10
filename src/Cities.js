import React from "react";
import "./Cities.css";

export default function Cities() {
  let places = ["Kampala", "Kigali", "Dodoma", "Addis Ababa"];
  return (
    <div className="Cities">
      <ul>
        {places.map(function (place, index) {
          return (
            <li key={index}>
              <a href="/">{place}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
