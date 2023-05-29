import React, { useState } from 'react';

const Form = () => {
  const [city, setCity] = useState('');

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
		const { temp, weatherDescription, imageURL } = responseData;
		console.log(temp, weatherDescription, imageURL);
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
    </div>
  );
};

export default Form;
