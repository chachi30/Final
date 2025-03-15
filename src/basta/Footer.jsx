import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub Profile"
            >
              <FaGithub className="icon" />
              <span>GitHub</span>
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook Profile"
            >
              <FaFacebook className="icon" />
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram Profile"
            >
              <FaInstagram className="icon" />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:your.email@gmail.com"
              className="social-icon"
              aria-label="Email Contact"
            >
              <FaEnvelope className="icon" />
              <span>Email</span>
            </a>
          </div>
          
          <p className="footer-text">
            Made with <FaHeart className="heart-icon" /> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;