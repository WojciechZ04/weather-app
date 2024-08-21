import React, { useState } from "react";
import { Container, CircularProgress } from "@mui/material";

import WeatherDetails from "./WeatherDetails";
import SearchBar from "./SearchBar";
import imageMap from "../../assets/imageMap";
import "./Home.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [weatherBackground, setWeatherBackground] = useState("Default");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleButtonClick = () => {
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
        console.log(responseData.weatherMainDescription);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });

    setCity("");
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const styles = {
    container: {
      backgroundImage: `url(${imageMap[weatherBackground]})`,
      transition: "background-image 0.5s ease-in-out",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
    },
  };

  return (
    <div style={styles.container}>
      <Container sx={{ py: "50px", minHeight: "80vh" }}>
        <SearchBar
          value={city}
          onChange={handleInputChange}
          onSubmit={handleButtonClick}
        />

        {isLoading ? (
          <div class="containerLoading">
          <div class="cloud front">
            <span class="left-front"></span>
            <span class="right-front"></span>
          </div>
          <span class="sun sunshine"></span>
          <span class="sun"></span>
          <div class="cloud back">
            <span class="left-back"></span>
            <span class="right-back"></span>
          </div>
        </div>
        ) : (
          <div></div>
        )}
        {weatherData ? (
          <WeatherDetails name={name} weatherData={weatherData} />
        ) : (
          <div></div>
        )}
        {error ? <div>{error}</div> : <div></div>}
      </Container>
    </div>
  );
};

export default Home;
