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
      height: "100vh",
    },
  };

  return (
    <div style={styles.container}>
      <Container sx={{ py: "50px", minHeight: "80vh" }}>
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
          <div></div>
        )}
        {weatherData ? (
          <WeatherDetails name={name} weatherData={weatherData} />
        ) : (
          <div></div>
        )}
        {error ? <ErrorContainer>{error}</ErrorContainer> : <div></div>}
      </Container>
    </div>
  );
};

export default Home;