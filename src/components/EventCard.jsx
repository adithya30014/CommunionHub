import React from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
    return (
        <div className="event-card">
            <div className="image-container">
                <img src={event.image} alt={event.title} />
                <div className="date-badge">
                    <span>{new Date(event.date).toLocaleString('en-US', { month: 'short' })}</span>
                    <span>{new Date(event.date).getDate()}</span>
                </div>
            </div>
            <div className="event-content">
                <span className={`event-category ${event.category.toLowerCase()}`}>
                    {event.category}
                </span>
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {new Date(event.date).toDateString()}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p className="description">{event.description}</p>
                <button className="details-button">Event Details →</button>
            </div>
        </div>
    );
};

export default EventCard;
