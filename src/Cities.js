import React from "react";
import "./Cities.css";

export default function Cities() {
  let places = ["Nairobi", "Kisumu", "Mombasa", "Nanyuki"];
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
