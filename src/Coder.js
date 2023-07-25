import React from "react";
import "./Coder.css";

export default function Corder() {
  return (
    <small>
      <div className="Corder mt-3">
        <span className="text-white">
          This project was coded by Brenda Omondi and is{" "}
        </span>
        <a
          href="https://github.com/Brendafrenjo/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="source-code text-white"
        >
          open-sourced on GitHub
        </a>
        <span className="coded-by text-white"> and </span>

        <a
          href="https://heroic-pasca-a7d234.netlify.app/"
          className="text-white"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </div>
    </small>
  );
}
