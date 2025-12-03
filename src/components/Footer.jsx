import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/about">About</Link>
      <Link to="/features">Features</Link>
    </footer>
  );
}

export default Footer;
