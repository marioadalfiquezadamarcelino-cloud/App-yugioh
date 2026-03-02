import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
    <header className ="header">
        <h1 className="logo"> Yu-Gi-Oh! App</h1>
        <nav className="nav">
            <Link to={"/home"}> Home</Link>
            <Link to={"/deck"}> Deck</Link>
            <Link to={"/about"}> About</Link>
        </nav>
    </header>
    
    );
}

export default Header;