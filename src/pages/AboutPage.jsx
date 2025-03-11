// src/pages/AboutPage.jsx
import React from "react";
import Header from "../components/Header";
import TeamMemberCard from "../components/TeamMemberCard";
import FAQSection from "../components/FAQSection";
import { aboutContent } from "../data/aboutData";
import { teamMembers } from "../data/teamData";
import "./AboutPage.css";

const AboutPage = () => {
    return (
        <div>
            <Header />
            
            <section className="about-page">
                
                {/* Mission Section */}
                <div className="mission-section">
                    <h1>{aboutContent.title}</h1>
                    <p className="mission">{aboutContent.mission}</p>
                </div>

                {/* Impact Section */}
                <div className="impact-section">
                    <h2>Our Impact</h2>
                    <ul className="impact-list">
                        {aboutContent.impact.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Team Section */}
                <div className="team-section">
                    <h2>Meet Our Team</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <FAQSection faqs={aboutContent.faqs} />
                </div>
                
            </section>
        </div>
    );
};

export default AboutPage;
