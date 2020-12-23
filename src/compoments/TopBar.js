import React from "react";
import { faHome, faInbox } from '@fortawesome/free-solid-svg-icons';
import { faWpexplorer } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./TopBar.css";

export default function App() {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">
          <img src="https://instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x" />
        </div>
        <div className="search">
          <input type="text" id="top_search" placeholder="search" />
        </div>
        <div className="link">
          <button type="button" className="btn home">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </button>
          <button type="button" className="btn inbox">
            <FontAwesomeIcon icon={faInbox} size="lg" />
          </button>
          <button type="button" className="btn explorer">
            <FontAwesomeIcon icon={faWpexplorer} size="lg" />
          </button>
          <button type="button" className="btn like">
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </button>
          <button type="button" className="btn user">
            <FontAwesomeIcon icon={faInbox} size="lg" />
          </button>
        </div>
      </div>
    </header>
  );
}
