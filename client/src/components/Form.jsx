import React, { useState } from 'react';

const Form = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleButtonClick = () => {
	fetch('http://localhost:8000/api/weather', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({ city }),
	})
	  .then(response => response.json())
	  .then(data => {
		const { responseData } = data;
		setWeatherData(responseData);
	  })
	  .catch(error => {
		console.error(error);
	  });
  };

  const handleInputChange = event => {
    setCity(event.target.value);
  };

  return (
    <div>
      <input type="text" value={city} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Submit</button>

	  {weatherData ? (
        <>
          <div>Temperature: {weatherData.temp}°C</div>
          <div>Weather: {weatherData.weatherDescription}</div>
          <img src={weatherData.imageURL} alt="Weather Icon" />
        </>
      ) : (
        <div></div>
      )}
    </div>

  );
};

export default Form;
