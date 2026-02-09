import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © Yu-Gi-Oh! App. All rights reserved.{" "}
        <Link to="/privacy">Privacy & Cookies</Link> | Terms
      </p>

      <div className="social">
        <a href="https://twitter.com" target="_blank">🐦 Twitter</a>
        <a href="https://facebook.com" target="_blank">📘 Facebook</a>
        <a href="https://instagram.com" target="_blank">📷 Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
