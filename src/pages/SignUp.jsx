import React from "react";
import "../styles/SignUp.css";

import train from "../assets/Images/train.png";

function SignUp() {
  return (
    <div className="signup-page">
      {/* train along bottom */}
      <div className="signup-train-wrapper">
        <img src={train} alt="Train" className="signup-train" />
      </div>

      <div className="signup-box">
        <h1>Create Account</h1>
        <p className="signup-sub">Start planning your seamless trips.</p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
