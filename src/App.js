import React from "react";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <SearchForm defaultCity="New York" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
