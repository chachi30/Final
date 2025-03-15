import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="about-section" id="about">
      <motion.div 
        className="container about-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate web developer with a keen eye for creating 
            elegant and efficient digital solutions. My journey in tech began 
            with a curiosity to understand how things work under the hood.
          </p>
          <p>
            I specialize in full-stack development, focusing on creating 
            responsive, performant, and user-friendly web applications. 
            My approach combines technical expertise with creative problem-solving.
          </p>
          <div className="personal-info">
            <div className="info-item">
              <span className="label">Name:</span>
              <span className="value">Charls Hermosa</span>
            </div>
            <div className="info-item">
              <span className="label">Email:</span>
              <span className="value">your.email@example.com</span>
            </div>
            <div className="info-item">
              <span className="label">Location:</span>
              <span className="value">Your City, Country</span>
            </div>
          </div>
          <a href="/resume.pdf" className="btn btn-primary" target="_blank">
            Download Resume
          </a>
        </div>
        <div className="about-image">
          <img 
            src="/IMG_3717.jpeg" 
            alt="About Me" 
            className="profile-image"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;