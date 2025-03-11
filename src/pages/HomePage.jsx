// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    return (
        <div className="home-page">
            
            {/* Header Section */}
            <header className="header">
                <div className="logo">
                    <img src="/logo.png" alt="Communion Logo" />
                    <span>CommunionHub</span>
                </div>
                <nav className="nav-menu">
                    <Link to="/">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/about">About</Link>
                    <button className="sign-in-button">Sign In</button>
                </nav>
            </header>

            {/* Home Section */}
            <section className="home-section">
                <div className="home-content">
                    <div className="badge">Infinite Benefits</div>
                    
                    <h1>
                    Come together, collaborate, <br />
                        <span className="highlight">Interact,</span> <br />
                        and inspire one another.
                    </h1>

                    <div className="profile-group">
                        <img src="/images/team/first-img.jpg" alt="Profile 1" />
                        <img src="/images/team/second-img.jpg" alt="Profile 2" />
                        <img src="/images/team/third-img.jpg" alt="Profile 3" />
                        <span>+8 peoples</span>
                    </div>

                    <p className="description">
                    Come be a member of a community where innovation and spirituality coexist. By working together, we will create a world that is more connected, inclusive, and engaging than it has ever been!
                    </p>
                    
                    <button className="cta-button">
                    Check Out the Services We Offer →
                    </button>
                </div>

                <div className="home-images">
                    <img src="/communityone.jpg" alt="Community 1" />
                    <img src="/communitytwo.jpg" alt="Community 2" />
                    <img src="/communitythree.jpg" alt="Community 3" />
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-intro">
                    <h2>Why Communion Is So Great!</h2>
                    <p>
                    Communion is a dynamic place that brings together many faiths, beliefs, and customs; it is not merely another platform. We are creating a society where oneness becomes the norm and diversity become strengths by encouraging cooperation and connection.
                    </p>
                    <a href="#learn-more" className="learn-more-link">What Makes Us Join? →</a>
                </div>

                <div className="features-grid">
                    {[
                        { 
                            title: "Bringing Communities Together", 
                            desc: "Communion serves as a social center for interaction between various religious communities.", 
                            icon: "👥" 
                        },
                        { 
                            title: "Creative and enjoyable", 
                            desc: "Through our cutting-edge methodology, captivating events, and interactive features, discover faith in a new way.", 
                            icon: "🎯" 
                        },
                        { 
                            title: "Encouraging Unity", 
                            desc: "Through meaningful interactions, we promote harmony and understanding across various religious communities.", 
                            icon: "📈" 
                        }
                    ].map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <span className="feature-icon">{feature.icon}</span>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                            <a href="#learn-more" className="learn-more-button">
                                Learn More →
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Community Section */}
            <section className="community-section">
                <div className="community-header">
                    <div className="text-content">
                        <h2>Participate in the Discussion</h2>
                        <h3>✨ Create Relationships</h3>
                        <p>
                        Find a lively community, express your opinions, and make connections with people who share your interests.
                        We develop together.
                        </p>
                        <button className="primary-button">
                        Participate in the Discussion →
                        </button>
                    </div>
                </div>

                <div className="community-images">
                    <img src="/communityfour.jpg" alt="Community Collaboration" />
                    <img src="/communityfive.jpg" alt="Engagement and Fun" />
                </div>

                <div className="community-stats">
                    {[
                        { label: "Cheers to the community!", icon: "⚪" },
                        { label: "210% Increase in Involvement", icon: "⚪" },
                        { label: "More than 172+ Ranked Communities", icon: "⚪" },
                    ].map((stat, index) => (
                        <div className="stat-card" key={index}>
                            <span className="stat-icon">{stat.icon}</span>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>

                <h3 className="community-subtext">
                Where Relationships Bloom <br /> and Concepts Grow ✨ 2×
                </h3>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    {[
                        { question: "The Communion app: what is it?", answer: "An app that uses events to bring communities together." },
                        { question: "Can I use it for free?", answer: "Yes, everyone can use the software for free." },
                        { question: "Can I make new friends?", answer: "Of course! Participate in events and make connections." }
                    ].map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Communion. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
