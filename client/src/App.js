import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { WeatherProvider } from './WeatherContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <WeatherProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </WeatherProvider>
    </Router>
  );
}

export default App;
