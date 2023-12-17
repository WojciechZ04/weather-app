import React, { useState } from "react";
import { TextField, Container, Button, Grid } from "@mui/material";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import defaultImage from "../images/default.jpg";
import thunderstormImage from "../images/thunderstorm.jpg";
// import drizzleImage from "../images/drizzle.jpg";
import rainImage from "../images/rain.jpg";
import snowImage from "../images/snow.jpg";
import fogImage from "../images/fog.jpg";
import tornadoImage from "../images/tornado.jpg";
import clearImage from "../images/clear.jpg";
import cloudsImage from "../images/clouds.jpg";
// import defaultImage from "../images/default.jpg"
// import defaultImage from "../images/default.jpg"

const Form = () => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [weatherBackground, setWeatherBackground] = useState("default")
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
        setName(city);
        setWeatherBackground(responseData.weatherMainDescription)
        console.log(responseData.weatherMainDescription);
      })
      .catch((error) => {
        console.error(error);
      });

    setCity("");
  };

  const backgroundMap = {
    default: defaultImage,
    Thunderstorm: thunderstormImage,
    Drizzle: rainImage,
    Rain: rainImage,
    Snow: snowImage,
    // mist:
    // smoke:
    // haze:
    // dust:
    Fog: fogImage,
    // sand:
    // squall:
    Tornado: tornadoImage,
    Clear: clearImage,
    Clouds: cloudsImage
  }

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const styles = {
    container: {
      backgroundImage: `url(${backgroundMap[weatherBackground]})`,
      transition: 'background-image 0.5s ease-in-out',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh'
    },
  };

  return (
    <div style={styles.container}>
      <Container
        sx={{ py: "50px", minHeight: "80vh" }}
      >
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
              <Grid
                className="container"
                container
                spacing={2}
                sx={{ m: 0 }}
              >
                <Grid className="content" item xs={6}>
                  <div className="basicInfo">
                    {name} <PlaceIcon sx={{ fontSize: "40px" }} />
                  </div>
                </Grid>
                <Grid className="content" item xs={6}>
                  <div className="basicInfo">
                    <AccessTimeIcon sx={{ fontSize: "40px" }} />{" "}
                    {weatherData.time} {weatherData.timezone}
                  </div>
                </Grid>
                <Grid className="content" item xs={6}>
                  <div className="temp">
                    <ThermostatIcon sx={{ fontSize: "70px" }} />{" "}
                    {weatherData.temp}°C
                  </div>
                </Grid>
                <Grid className="content" item xs={6}>
                  <img
                    className="icon"
                    src={weatherData.imageURL}
                    alt="Weather Icon"
                  />
                  <div>{weatherData.weatherDescription}</div>
                </Grid>
                <Grid className="content" item xs={2}>
                  <div>Perceptible temperature: {weatherData.feelsTemp}°C</div>
                </Grid>
                <Grid className="content" item xs={2}>
                  <div>
                    <AirIcon /> {weatherData.windSpeed} meter/sec
                  </div>
                </Grid>
                <Grid className="content" item xs={2}>
                  <div>Pressure: {weatherData.pressure} hPa</div>
                </Grid>
                <Grid className="content" item xs={3}>
                  <div>
                    <WbTwilightIcon />
                    <ArrowDropUpIcon />
                    {weatherData.sunrise}
                  </div>
                </Grid>
                <Grid className="content" item xs={3}>
                  <div>
                    <WbTwilightIcon />
                    <ArrowDropDownIcon />
                    {weatherData.sunset}
                  </div>
                </Grid>
              </Grid>
            </Container>
          </>
        ) : (
          <div></div>
        )}
      </Container>
    </div>
  );
};

export default Form;
