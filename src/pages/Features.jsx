import React from "react";
import "../styles/Features.css";
import bike from "../assets/Images/bike.png";

function Features() {
  return (
    <div className="features-page">
      <div className="features-overlay">
        <h1>Features</h1>
        <ul>
          <li>Smart trip planning</li>
          <li>Itinerary tracking</li>
          <li>Budget & expense overview</li>
          <li>Reminders & notifications</li>
        </ul>
      </div>

      <div className="features-bike-wrapper">
        <img src={bike} alt="Bike" className="features-bike" />
      </div>
    </div>
  );
}

export default Features;
