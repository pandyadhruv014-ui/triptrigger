import React, { useEffect, useState } from "react";
import "../styles/Home.css";

import logo from "../assets/Images/logo.png"; // logo already in navbar but ok
import airplane from "../assets/Images/airplane.png";

import bg1 from "../assets/Images/bg1.jpg";
import bg2 from "../assets/Images/bg2.jpg";
import bg3 from "../assets/Images/bg3.jpg";

function Home() {
  const backgrounds = [bg1, bg2, bg3];
  const [bgIndex, setBgIndex] = useState(0);

  const taglines = [
    "Plan, Track, Travel and Organize without Worries!",
    "Makes Your Trip Simplified",
  ];
  const [taglineIndex, setTaglineIndex] = useState(0);

  // Background change every 8s
  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(id);
  }, [backgrounds.length]);

  // Tagline text loop
  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(id);
  }, [taglines.length]);

  return (
    <div
      className="home-hero"
      style={{ backgroundImage: `url(${backgrounds[bgIndex]})` }}
    >
      {/* airplane starting near welcome text */}
      <img src={airplane} alt="airplane" className="home-airplane" />

      <div className="home-content">
        <h1 className="welcome-title text-animate">Welcome.</h1>
<h2 className="sub-title text-animate">to TripTrigger</h2>
<p className="tagline text-animate">Plan, Track, Travel and Organize without Worries!</p>


        <a href="/signup" className="home-get-started">
          Get Started →
        </a>
      </div>
    </div>
  );
}

export default Home;
