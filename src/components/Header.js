import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Name</div>
      <nav>
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
