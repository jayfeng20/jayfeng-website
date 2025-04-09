import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-icon">J</div>
        {/* <span className="logo-text">Jonathan</span> */}
      </div>

      {/* RIGHT: Navigation Menu */}
      <nav className="navigation">
        <ul>
          <li>
            <a href="#hero">HOME</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#experience">EXPERIENCE</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
