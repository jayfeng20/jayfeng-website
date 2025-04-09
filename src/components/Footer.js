import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-contact">
        <a
          href="https://github.com/jayfeng20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} color="#181717" />
        </a>
        <a
          href="https://linkedin.com/in/jayfeng20"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} color="#0077B5" />
        </a>
        <a href="mailto:jonathanfeng2001@gmail.com" aria-label="Email">
          <MdEmail size={24} color="#808080" />
        </a>
      </div>
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Jonathan Feng. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
