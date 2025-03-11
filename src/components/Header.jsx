import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src="/logo.png" alt="Communion Logo" />
                <span>CommunionHub</span>
            </div>

            {/* Navigation Menu */}
            <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <DropdownMenu />
                <Link to="/about" onClick={closeMenu}>About</Link>
                <Link to="/signin" className="sign-in-button" onClick={closeMenu}>Sign In</Link>
            </nav>

            {/* Hamburger Menu */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
};

export default Header;
