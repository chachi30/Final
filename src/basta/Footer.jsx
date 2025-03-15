import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaEnvelope,  } from 'react-icons/fa';
import { GiBurningPassion } from "react-icons/gi";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://github.com/chachi30"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <FaGithub className="icon" />
              <span>GitHub</span>
            </a>
            <a
              href="https://facebook.com/chacha0530"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook Profile"
            >
              <FaFacebook className="icon" />
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="icon" />
              <span>Instagram</span>
            </a>
            <a
              href="t.chachi32@gmail.com"
              className="social-icon"
              aria-label="Email Contact"
            >
              <FaEnvelope className="icon" />
              <span>Email</span>
            </a>
          </div>
          
          <p className="footer-text">
            Made with <GiBurningPassion className="GiBurningPassion-icon" /> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;