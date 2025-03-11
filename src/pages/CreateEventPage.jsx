import React, { useState } from "react";
import Header from "../components/Header";
import "./CreateEventPage.css";
import { useNavigate } from "react-router-dom";

const CreateEventPage = ({ onAddEvent }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("Free");
    const [isFree, setIsFree] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            id: Date.now(),
            title,
            date,
            time,
            image,
            category,
            isFree,
        };

        onAddEvent(newEvent);
        navigate("/events"); 
    };

    return (
        <div>
            <Header />
            <div className="create-event-container">
                <h1>Create a New Event</h1>
                <form onSubmit={handleSubmit} className="create-event-form">
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
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <select
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                            setIsFree(e.target.value === "Free");
                        }}
                    >
                        <option value="Free">Free</option>
                        <option value="Donation">Donation</option>
                        <option value="Religious">Religious</option>
                        <option value="Social">Social</option>
                        <option value="Charity">Charity</option>
                    </select>

                    <button type="submit" className="submit-button">Create Event</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEventPage;
