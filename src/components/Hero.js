import React from "react";
import "../styles/Hero.css";
import profileImage from "../assets/images/profile.jpg"; // Make sure the image exists

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hi, I'm Your Name</h1>
        <p>
          A passionate developer and tech enthusiast crafting sleek digital
          experiences.
        </p>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
