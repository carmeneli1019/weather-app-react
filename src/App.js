import React from "react";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <WeatherApp defaultCity="New York" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
