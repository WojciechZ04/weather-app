import React, { useState } from "react";
import { TextField, Container, Button, Grid } from "@mui/material";

const Form = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleButtonClick = () => {
    fetch("http://localhost:8000/api/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { responseData } = data;
        setWeatherData(responseData);
      })
      .catch((error) => {
        console.error(error);
      });

      
    setCity("");
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  
  return (
    <Container sx={{ py: "50px" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sx={{ width: "100%" }}>
          <TextField
            id="outlined-basic"
            label="City Name"
            variant="outlined"
            type="text"
            value={city}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            style={{ height: "50px", width: "150px" }}
          >
            Check
          </Button>
        </Grid>
      </Grid>

      {weatherData ? (
        <>
          <Container
            sx={{ py: "50px" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <div>Temperature: {weatherData.temp}°C</div>
            <div>Time: {weatherData.time}</div>
            <div>Weather: {weatherData.weatherDescription}</div>
            <div>Perceptible temperature: {weatherData.feelsTemp}°C</div>
            <div>Wind speed: {weatherData.windSpeed} meter/sec</div>
            <div>Sunrise: {weatherData.sunrise}</div>
            <div>Sunset: {weatherData.sunset}</div>
            <div>Timezone: {weatherData.timezone}</div>
            <img src={weatherData.imageURL} alt="Weather Icon" />
          </Container>
        </>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Form;
