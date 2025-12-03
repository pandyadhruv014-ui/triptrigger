import React from "react";
import "../styles/Features.css";
import bike from "../assets/Images/bike.png"; // features vehicle

function Features() {
  return (
    <div className="features-page">

      {/* Bike Animation */}
      <img src={bike} className="features-bike" />

      <div className="features-container">
        <h1>Why TripTrigger?</h1>
        <p>
          We bring everything you need for travel planning into one clean,
          fast and intelligent interface.
        </p>

        <h2>Core Features</h2>

        <ul>
          <li><strong>Smart Travel Planner:</strong> Organize trips, places and timelines.</li>
          <li><strong>Destination Insights:</strong> Compare attractions and explore experiences.</li>
          <li><strong>User Dashboard:</strong> Manage trips, updates and bookings.</li>
          <li><strong>Route Awareness:</strong> Know where you are and what is nearby.</li>
          <li><strong>Future Forecast:</strong> AI-powered suggestions for ideal itinerary.</li>
        </ul>

        <p className="closing">
          Your journey starts when planning becomes effortless.  
          TripTrigger is built to make that happen.
        </p>
      </div>
    </div>
  );
}

export default Features;
