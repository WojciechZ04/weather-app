import React, { useState } from "react";
import { TextField, Container, Button, Grid } from "@mui/material";
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Form = () => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
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
    <Container sx={{ py: "50px", minHeight: '80vh'}}>
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
              height: "100vh"
            }}
          >
            <Grid className="container" container spacing={2} sx={{ m: 0 }}>
              <Grid className="content" item xs={6} >
                <div className="basicInfo">{name} <PlaceIcon sx={{ fontSize: "40px" }}/></div>
              </Grid>
              <Grid className="content" item xs={6}>
                <div className="basicInfo"><AccessTimeIcon sx={{ fontSize: "40px" }}/> {weatherData.time} {weatherData.timezone}</div>
              </Grid>
              <Grid className="content" item xs={6}>
                <div className="temp"><ThermostatIcon sx={{ fontSize: "70px" }} /> {weatherData.temp}°C</div>
              </Grid>
              <Grid className="content" item xs={6}>
                <img className="icon" src={weatherData.imageURL} alt="Weather Icon" />
                <div>{weatherData.weatherDescription}</div>
              </Grid>
                <Grid className="content" item xs={2}>
                <div>Perceptible temperature: {weatherData.feelsTemp}°C</div>
                </Grid>
                <Grid className="content" item xs={2}>
                <div><AirIcon /> {weatherData.windSpeed} meter/sec</div>
                </Grid>
                <Grid className="content" item xs={2}>
                <div>Pressure: {weatherData.pressure} hPa</div>
                </Grid>
              <Grid className="content" item xs={3}>
                <div><WbTwilightIcon/><ArrowDropUpIcon />{weatherData.sunrise}</div>
              </Grid>
              <Grid className="content" item xs={3}>
                <div><WbTwilightIcon/><ArrowDropDownIcon />{weatherData.sunset}</div>
              </Grid>

            </Grid>
          </Container>
        </>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default Form;
