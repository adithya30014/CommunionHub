import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
    { question: "What kinds of gatherings does Communion plan?", answer: "To foster community connections and support, we plan social, religious, and charitable events." },
    { question: "Do events take place in person or virtually?", answer: "To satisfy everyone's tastes, we provide both online and live events." },
    { question: "How can I register for an event?", answer: "By selecting 'Event Details' on our Events Page, you can sign up for events directly." },
    { question: "Are there any discounts for groups?", answer: "Yes, for certain events, group discounts are offered. Get in touch with us for further information." },
    { question: "What is your policy regarding refunds and cancellations?", answer: "Our policy accepts cancellations up to 48 hours before the event for a full refund." }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className={`faq-item ${index === activeIndex ? "active" : ""}`} 
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {faq.question}
                            <span className="faq-toggle">{index === activeIndex ? "-" : "+"}</span>
                        </div>
                        {index === activeIndex && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
