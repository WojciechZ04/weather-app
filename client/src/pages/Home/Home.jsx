import React, { useContext } from "react";
import { Container } from "@mui/material";
import { WeatherContext } from "../../WeatherContext";
import WeatherDetails from "./WeatherDetails";
import imageMap from "../../assets/imageMap";
import styled from "styled-components";
import "./Home.css";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorContainer = styled(CenteredContainer)`
  color: red;
`;

const LoadingContainer = styled(CenteredContainer)`
  color: blue;
`;

const Home = () => {
  const {
    name,
    weatherBackground,
    weatherData,
    isLoading,
    error,
  } = useContext(WeatherContext);

  const styles = {
    container: {
      backgroundImage: `url(${imageMap[weatherBackground]})`,
      transition: "background-image 0.5s ease-in-out",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      display: "flex",
    },
  };

  return (
    <div style={styles.container} className="Home">
        {isLoading ? (
          <LoadingContainer class="containerLoading">
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
          </LoadingContainer>
        ) : (
          <></>
        )}
        {weatherData ? (
          <WeatherDetails name={name} weatherData={weatherData} />
        ) : (
          <></>
        )}
        {error ? <ErrorContainer>{error}</ErrorContainer> : <></>}

    </div>
  );
};

export default Home;