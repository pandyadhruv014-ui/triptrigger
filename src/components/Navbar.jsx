import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/Images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="TripTrigger Logo" className="nav-logo" />
        {/* No title text as per your latest request */}
      </div>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/signin" className="nav-signin-btn">
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
