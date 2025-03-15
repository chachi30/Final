import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img 
          src="/charls.png" 
          alt="Your Name" 
          className="hero-image"
          variants={itemVariants}
        />
        <motion.h1 
          className="hero-name"
          variants={itemVariants}
        >
          Charls Hermosa
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Web Developer | Front-end Designer
        </motion.p>
        <motion.div 
          className="hero-cta"
          variants={itemVariants}
        >
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="/resume.pdf" className="btn btn-secondary" target="_blank">Download CV</a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;