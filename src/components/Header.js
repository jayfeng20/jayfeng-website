import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Jonathan Feng</div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
