const express = require("express");
const cors = require("cors");
const https = require("https");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/weather", (req, res) => {
  const query = req.body.city;
  const apiKey = "2b946b9eca172db7908afc3b9fabf6f0";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units;

  https
    .get(url, function (response) {
      if (response.statusCode === 200) {
        let data = "";

        response.on("data", function (chunk) {
          data += chunk;
        });

        response.on("end", function () {
          const now = new Date();
          const currentTime = (now.getUTCHours() - 1) * 3600 + now.getUTCMinutes() * 60;
          const weatherData = JSON.parse(data);
          const temp = weatherData.main.temp;
          const weatherMainDescription = weatherData.weather[0].main;
          const weatherDescription = weatherData.weather[0].description;
          const icon = weatherData.weather[0].icon;
          const feelsTemp = weatherData.main.feels_like;
          const windSpeed = weatherData.wind.speed;
          const pressure = weatherData.main.pressure;
          const sunrise = new Date((weatherData.sys.sunrise + weatherData.timezone - 7200) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const sunset = new Date((weatherData.sys.sunset + weatherData.timezone - 7200) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    
          const offsetHours = Math.abs(weatherData.timezone) / 3600; // Convert offset to hours
          const offsetSign = weatherData.timezone >= 0 ? '+' : '-'; // Determine the sign of the offset
          const timezone = `UTC${offsetSign}${offsetHours}`;
          const time = new Date((currentTime + weatherData.timezone) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

          const responseData = {
            temp,
            weatherMainDescription,
            weatherDescription,
            imageURL,
            feelsTemp,
            windSpeed,
            time,
            sunrise,
            sunset,
            timezone,
            pressure,
            time
          }
          
          res.json({responseData});
        });
      } else {
        console.log(
          "Failed to retrieve weather data. Status code:",
          response.statusCode
        );
        res.status(response.statusCode).json({ error: "Failed to retrieve weather data" });
      }
    })
    .on("error", function (error) {
      console.error("Error occurred while making the request:", error.message);
    });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});