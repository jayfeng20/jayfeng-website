import React from "react";
import "../styles/Hero.css";
import profileImage from "../assets/images/profile.png"; // Adjust the path as needed

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Left Column: Greeting */}
      <div className="hero-left">
        <h1>Hi, I'm Jonathan</h1>
      </div>

      {/* Center Column: Profile Image */}
      <div className="hero-center">
        <img src={profileImage} alt="Profile" className="hero-image" />
      </div>

      {/* Right Column: Brief Introduction */}
      <div className="hero-right">
        <p>
          Data software engineer with a passion in creating scalable,
          data-intensive applications.
        </p>
      </div>
    </section>
  );
};

export default Hero;
