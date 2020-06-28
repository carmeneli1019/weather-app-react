import React from "react";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <div className="row no-gutters">
        <div className="col-6">
          <input
            type="search"
            className="form-control shadow-sm"
            placeholder="Enter a city..."
            autoComplete="off"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-link search-button">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="col-auto">
          <button type="reset" className="btn btn-link">
            <i className="fas fa-location-arrow" />
          </button>
        </div>
      </div>
    </form>
  );
}
