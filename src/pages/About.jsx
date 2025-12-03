import React from "react";
import "../styles/About.css";
import bus from "../assets/Images/bus.png"; // your file name

function About() {
  return (
    <div className="about-page">

      {/* Animated Vehicle */}
      <img src={bus} className="about-bus" />

      <div className="about-container">
        <h1>About TripTrigger</h1>
        <p>
          TripTrigger is your smart travel companion — the place where ideas,
          planning, and organization come together. Whether you’re planning a solo
          trip, family vacation, or business travel, we help you prepare with ease.
        </p>

        <p>
          We believe traveling should be effortless and exciting, not stressful.
          That’s why TripTrigger lets you organize itineraries, compare destinations,
          track your plans, and access everything in one place.
        </p>

        <h2>Our Vision</h2>
        <p>
          To simplify travel planning and make exploration accessible, engaging,
          and joyful for everyone.
        </p>

        <h2>Our Mission</h2>
        <ul>
          <li>Empowering travelers with smart planning tools</li>
          <li>Providing a clean and interactive travel dashboard</li>
          <li>Making trip organization seamless</li>
          <li>Helping you focus on experiences — not stress</li>
        </ul>

        <p className="quote">
          “Travel more, worry less.” — That’s our promise.
        </p>
      </div>
    </div>
  );
}

export default About;
