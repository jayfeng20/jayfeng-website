import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo-container">
          <div className="logo-icon">J</div>
          {/* <span className="logo-text">Jonathan</span> */}
        </div>
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
            <li>
              <a href="#footer">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
