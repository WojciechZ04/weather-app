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
          const weatherData = JSON.parse(data);
          const temp = weatherData.main.temp;
          const weatherDescription = weatherData.weather[0].description;
          const icon = weatherData.weather[0].icon;
          const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

          const responseData = {
            temp,
            weatherDescription,
            imageURL
          }
          
          res.json({responseData});
        });
      } else {
        console.log(
          "Failed to retrieve weather data. Status code:",
          response.statusCode
        );
      }
    })
    .on("error", function (error) {
      console.error("Error occurred while making the request:", error.message);
    });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});