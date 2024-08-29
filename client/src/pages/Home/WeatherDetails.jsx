import React from "react";
import { Container, Grid } from "@mui/material";

import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function WeatherDetails({name, weatherData}) {
  return (
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
        <Grid className="container" container spacing={2} sx={{ m: 0 }}>
          <Grid className="content" item xs={6}>
            <div className="basicInfo">
              {name} <PlaceIcon sx={{ fontSize: "40px" }} />
            </div>
          </Grid>
          <Grid className="content" item xs={6}>
            <div className="basicInfo">
              <AccessTimeIcon sx={{ fontSize: "40px" }} /> {weatherData.time}{" "}
              {weatherData.timezone}
            </div>
          </Grid>
          <Grid className="content" item xs={6}>
            <div className="temp">
              <ThermostatIcon sx={{ fontSize: "70px" }} /> {weatherData.temp}°C
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
  );
}

export default WeatherDetails;