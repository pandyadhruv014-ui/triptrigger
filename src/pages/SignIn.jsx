import React from "react";
import "../styles/SignIn.css";
import car from "../assets/Images/car.png";

function SignIn() {
  return (
    <div className="signin-page">
      <div className="signin-car-wrapper">
        <img src={car} alt="Car" className="signin-car" />
      </div>

      <div className="signin-box">
        <h1>Sign In</h1>
        <p className="signin-sub">Welcome back to TripTrigger.</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
