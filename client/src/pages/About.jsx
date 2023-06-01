import React from "react";
import { Container } from "@mui/material";

function About() {
  return (
    <Container sx={{ py: "50px", minHeight: "80vh" }}>
      <h1>About page</h1>
      <div>
        <h2>What is this project about?</h2>
        <p>
          This is big project called Weather App. Its funcionality is to display
          some basic information about weather conditions, time and more, afrer
          specifying the city name.
        </p>
      </div>
      <div>
        <h2>How does it work?</h2>
        <p>
          Firstly you need to type in what city you want to check weather. By
          clicking the button, the input is send to backend server which is
          responsible of getting necessary information from OpenWeather. Then
          data is modified and converted to object which is send back to
          frontend and displayed.
        </p>
      </div>
      <div>
        <h2>What skills are used in the project?</h2>
        <p>
          Currently there is used knowledge about Express.js, React and MUI
          components, use real-time API, CSS styles, responsive websites and
          communication between front and backend.
        </p>
      </div>
      <div>
        <h2>Is the project complete?</h2>
        <p>
          The project is constantly being developed both on the frontend and
          backend. I want to make website more attractive, add some animations.
          There is also idea of changing style depending of weather conditions
          and/or time of the day (dark theme in night for example). Also I want
          to develop the project so it will be available in Polish language. I
          want to keep everything responsive, with clean project tree and
          reusing as much code as I can.
        </p>
      </div>
    </Container>
  );
}

export default About;
