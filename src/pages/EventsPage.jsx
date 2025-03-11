import React, { useState } from "react";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import Pagination from "../components/Pagination";
import FAQSection from "../components/FAQSection";
import { eventsData } from "../data/eventsData";
import "./EventsPage.css";

const EventsPage = () => {
    const [events] = useState(eventsData);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 4;

    // Pagination logic
    const totalPages = Math.ceil(events.length / eventsPerPage);
    const startIndex = (currentPage - 1) * eventsPerPage;
    const paginatedEvents = events.slice(startIndex, startIndex + eventsPerPage);

    return (
        <div>
            <Header />
            <section className="events-page">
                <h1>We Helped Communities Connect & Flourish</h1>
                <h2>✨ Upcoming Events</h2>

                <div className="events-list">
                    {paginatedEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>

                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={setCurrentPage} 
                />

                <FAQSection />
            </section>
        </div>
    );
};

export default EventsPage;
