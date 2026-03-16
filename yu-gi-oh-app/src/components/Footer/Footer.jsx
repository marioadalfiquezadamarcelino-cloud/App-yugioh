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
    href="https://www.facebook.com/?locale=es_ES" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaFacebook size={25} />
  </a>

  <a 
    href="https://x.com/?lang=es" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <FaTwitter size={25} />
  </a>

  <a 
    href="https://www.instagram.com/" 
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
  <div className="rss-link">
  <h3>Our RSS Feed</h3>

  <p>
    Subscribe to our RSS feed to receive updates about the MangaGame
    Yu-Gi-Oh card application.
  </p>

  <a href="/rss/news.xml" target="_blank">
    View RSS Feed
  </a>
</div>

</div>
    </footer>
 
  );
};

export default Footer;
