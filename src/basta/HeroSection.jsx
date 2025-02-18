import React from "react";
import Image from './img_5732.png';

function HeroSection() {
  return (
    <section id="hero">
      <img src={Image} alt="Profile" className="image" />
      <h1 className="hero-text">
        Hello! I'm <span className="hero-name">Charls Hermosa</span>, <br />Front-end Designer
      </h1>
    </section>
  );
}

export default HeroSection;
