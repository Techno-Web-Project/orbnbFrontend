import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="video-container">
        <div className="hero-title">
          <h1>Une Expérience Unique</h1>
          <p>Qu'attendez-vous ?</p>
        </div>
        <div className="color-overlay"></div>
        <video src="/videos/video-2.mp4" autoPlay loop muted />
      </div>
    </div>
  );
}

export default HeroSection;
