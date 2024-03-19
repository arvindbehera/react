import React, { useEffect, useMemo, useState } from "react";
import { useWeatherFetch } from "./useWeatherFetch";
import "./weather.css";

function Weather() {
  const {
    inputCity,
    temp,
    handleSubmit,
    handleChange,
    error,
    city,
    showCity,
    onSuggest,
  } = useWeatherFetch();

  return (
    <div>
      <div className="weather-container">
        <h1 className="title">Current Weather</h1>
        <h3 className="temp-item">{temp}</h3>
        <div className="content-container">
          <input
            type="search"
            value={inputCity}
            onChange={handleChange}
            placeholder="Enter city name"
          />
          <button onClick={handleSubmit}>Search</button>
          <div className="error-item">{error}</div>

          {showCity &&
            city
              .filter((city) => {
                return city.includes(inputCity);
              })
              .map((item, i) => (
                <div
                  key={i}
                  onClick={() => onSuggest(item)}
                  className="suggetion-items">
                  {item}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Weather;
