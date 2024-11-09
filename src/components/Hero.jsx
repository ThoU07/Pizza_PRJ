/* eslint-disable no-unused-vars */
// Hero.jsx
import React from "react";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <h2>FEELING HUNGRY?</h2>
      <h1>Need a Pizza?</h1>
      <div className="hero-buttons">
        <button className="order-btn">ORDER NOW!</button>
        <button className="build-btn">BUILD YOUR PIZZA NOW!</button>
      </div>
    </div>
  );
};

export default Hero;
