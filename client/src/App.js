import React, { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:3001/message")
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
      <Form />
      {/* <h1>{message}</h1> */}
    </div>
  );
}

export default App;
