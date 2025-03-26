import React from "react";
import "../styles/Hero.css";
import profileImage from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hi! I'm Jonathan</h1>
        <p>
          A data engineer with a passion in designing data-intensive
          applications.
        </p>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
