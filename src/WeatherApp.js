import React from "react";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div>
      <div className="WeatherApp">
        <SearchForm />
      </div>
      <Footer />
    </div>
  );
}
