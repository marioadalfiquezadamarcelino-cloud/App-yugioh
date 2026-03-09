import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © Yu-Gi-Oh! App. All rights reserved.{" "}
        <Link to="/privacy">Privacy & Cookies</Link> | Terms
      </p>

    <div className="social-icons">

  <a 
    href="https://facebook.com/TUUSUARIO" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaFacebook size={25} />
  </a>

  <a 
    href="https://twitter.com/TUUSUARIO" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaTwitter size={25} />
  </a>

  <a 
    href="https://instagram.com/TUUSUARIO" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaInstagram size={25} />
  </a>

  <a 
    href="https://github.com/marioadalfiquezadamarcelino-cloud/App-yugioh" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaGithub size={25} />
  </a>

</div>
    </footer>
 
  );
};

export default Footer;
