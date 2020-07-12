import React from "react";
import WeatherApp from "./WeatherApp";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <WeatherApp defaultCity="Lisbon" />
      </div>
      <footer className="footer">
        <a href="https://github.com/carmeneli1019/weather-app-react" target="#">
          Open-source code
        </a>{" "}
        by Carmen Rosales,{" "}
        <a href="https://frosty-kirch-dc02ac.netlify.app/" target="#">
          hosted on Netlify{" "}
        </a>
        <span role="img" aria-label="woman coding">
          👩‍💻
        </span>
      </footer>
    </div>
  );
}

export default App;
