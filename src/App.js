// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import CreateEventPage from "./pages/CreateEventPage";
import AboutPage from "./pages/AboutPage";
import { eventsData as initialEvents } from "./data/eventsData";
import './App.css';

const App = () => {
    const [events, setEvents] = useState(initialEvents);

    const handleAddEvent = (newEvent) => {
        setEvents([newEvent, ...events]);
    };

    return (
        <Router>
            <div className="navbar">
                <div className="dropdown">
                    <div className="dropdown-menu">
                        <Link to="/create-event">Create Event</Link>
                        <Link to="/about">About Us</Link>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route 
                    path="/events" 
                    element={<EventsPage events={events} />} 
                />
                <Route 
                    path="/create-event" 
                    element={<CreateEventPage onAddEvent={handleAddEvent} />} 
                />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
};

export default App;
