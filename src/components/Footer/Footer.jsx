import React from "react";
import "./Footer.css";
const Footer = () => {
    return(
<footer className="footer">
    
    <p>© Yu-Gi-oh! App. All rights reserved. |privacy & cookies | Terms</p>
    <div className="social">
        <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
        <a href="https://www.facebook.com/?locale=es_ES" target="_blank" rel="noreferrer">📘 Faceboock </a>
        <a href="https://www.instagram.com/">📷 Instagram </a>
    </div>
</footer>
    );
}

export default Footer;