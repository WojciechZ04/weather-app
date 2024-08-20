import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/about' element={<About />} />
      </Routes>      
      <Footer/>
    </Router>
  );
}

export default App;
