import React, { useState } from "react";
import { useSuggestion } from "./useSuggestion";

export const useWeatherFetch = () => {
  const { city } = useSuggestion();
  const [inputCity, setInputCity] = useState("");
  const [temp, setTemp] = useState("");
  const [error, setError] = useState(null);

  //
  const [showCity, setShowCity] = useState(false);
  const onSuggest = (text) => {
    setInputCity(text);
    setShowCity(null);
  };
  //

  async function getPokemon() {
    let key = `aecbaf085aefcdd4d8e5511a11280818`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${key}`;
    const resp = await fetch(url).catch((res) => res.status);
    if (resp.ok === true) {
      const result = await resp.json().catch((err) => err);
      let cel = `${result.name} ${parseInt(result.main.temp - 273.15)}°C`;
      setTemp(`${cel}`);
    } else {
      setError("No Match Found");
    }
  }

  const handleSubmit = () => {
    if (inputCity.length === 0) {
      setError("Enter a city name");
    } else if (inputCity.length <= 2) {
      setError("Min 3 letters required");
    } else {
      getPokemon();
      setError(null);
      setShowCity(null);
    }
  };

  const handleChange = (e) => {
    setInputCity(e.target.value);
    setShowCity(true);
  };

  return {
    inputCity,
    temp,
    handleSubmit,
    handleChange,
    error,
    showCity,
    city,
    onSuggest,
    setInputCity,
  };
};
