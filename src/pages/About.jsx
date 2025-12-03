import React from "react";
import "../styles/About.css";
import bus from "../assets/Images/bus.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-overlay">
        <h1>About TripTrigger</h1>
        <p>
          (You can write your About Us content here later – company story,
          mission, and how TripTrigger helps travellers.)
        </p>
      </div>

      <div className="about-bus-wrapper">
        <img src={bus} alt="Bus" className="about-bus" />
      </div>
    </div>
  );
}

export default About;
