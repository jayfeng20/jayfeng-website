import React from "react";
import "../styles/Hero.css";
import profileImage from "../assets/images/profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import obsidianAnimation from "../assets/videos/obsidian-graph-animation.mp4";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Left Column: Greeting */}
      <div className="hero-left">
        <h1>
          <span className="typing" style={{ ["--n" as any]: 17 }}>
            Hi, I'm Jonathan
          </span>
        </h1>
      </div>

      {/* Center Column: Profile Image */}
      <div className="hero-center">
        <img src={profileImage} alt="Profile" className="hero-image" />
      </div>

      {/* Right Column: Brief Introduction */}
      <div className="hero-right">
        <p>B.S. in Computer Science from Cornell University. </p>
        <p> x</p>
        <p>
          Data software engineer with a passion for building scalable,
          data-intensive applications.
        </p>
        {/* --- contact icons --- */}
        <div className="hero-contact">
          <a
            href="https://github.com/jayfeng20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={32} color="#181717" />
          </a>
          <a
            href="https://linkedin.com/in/jayfeng20"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={32} color="#0077B5" />
          </a>
          <a href="mailto:jonathanfeng2001@gmail.com" aria-label="Email">
            <MdEmail size={32} color="#808080" />
          </a>
        </div>
      </div>

      <div className="p-4">
        <video autoPlay muted loop playsInline className="w-full h-auto">
          <source src={obsidianAnimation} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
