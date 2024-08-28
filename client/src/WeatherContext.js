import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [weatherBackground, setWeatherBackground] = useState("Default");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = (city) => {
    setIsLoading(true);
    setWeatherData(null);
    setWeatherBackground("Default");
    setError("");

    fetch("http://localhost:8000/api/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city }),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("No city found");
          } else {
            throw new Error("An error occurred");
          }
        }
        return response.json();
      })
      .then((data) => {
        const { responseData } = data;
        setIsLoading(false);
        setWeatherData(responseData);
        setName(city);
        setWeatherBackground(responseData.weatherMainDescription);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });

    setCity("");
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        name,
        weatherBackground,
        weatherData,
        isLoading,
        error,
        fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};