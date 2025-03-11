// src/components/DropdownMenu.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = () => setIsOpen(false);

    return (
        <div 
            className="dropdown-container" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <span className="dropdown-trigger">Events</span>
            
            {isOpen && (
                <div className="dropdown-menu">
                    <Link to="/events" className="dropdown-item">Upcoming Events</Link>
                    <Link to="/create-event" className="dropdown-item">Create Event</Link>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
