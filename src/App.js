import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="top_header">
        <div className="container">
          <div className="logo">
            <img src="https://instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x" />
          </div>
          <div className="search">
            <input type="text" id="top_search" placeholder="search" />
          </div>
          <div className="link">
            <button type="button" className="btn home">
              <i className="fa fa-home"></i>
            </button>
            <button type="button" className="btn inbox"></button>
            <button type="button" className="btn explorer"></button>
            <button type="button" className="btn like"></button>
            <button type="button" className="btn user"></button>
          </div>
        </div>
      </header>
    </div>
  );
}
