// src/components/EventForm.jsx
import React, { useState } from "react";
import "./EventForm.css";

const EventForm = ({ onAddEvent }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Charity");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            id: Date.now(),
            title,
            date,
            location,
            description,
            category,
            image: image || "https://via.placeholder.com/300x200?text=Event+Image",
        };
        onAddEvent(newEvent);

        // Clear form fields after submission
        setTitle("");
        setDate("");
        setLocation("");
        setDescription("");
        setCategory("Charity");
        setImage("");
    };

    return (
        <div className="event-form-container">
            <h2>Add New Event</h2>
            <form onSubmit={handleSubmit} className="event-form">
                <input
                    type="text"
                    placeholder="Event Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Event Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="Image URL (Optional)"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Charity">Charity</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                </select>
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
};

export default EventForm;
