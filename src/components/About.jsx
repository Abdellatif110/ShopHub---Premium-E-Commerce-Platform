import React from 'react';

const About = () => {
    const team = [
        { name: 'Alex Johnson', role: 'Founder & CEO', emoji: '👨‍💼' },
        { name: 'Sarah Williams', role: 'Head of Design', emoji: '👩‍🎨' },
        { name: 'Michael Chen', role: 'Tech Lead', emoji: '👨‍💻' },
        { name: 'Emma Davis', role: 'Marketing Director', emoji: '👩‍💼' }
    ];

    const achievements = [
        { number: '10+', label: 'Years Experience' },
        { number: '50K+', label: 'Products Sold' },
        { number: '99%', label: 'Customer Satisfaction' },
        { number: '24/7', label: 'Support Available' }
    ];

    return (
        <div className="about-container-premium" id="about">
            {/* About Hero */}
            <div className="about-hero">
                <div className="about-hero-content">
                    <div className="about-badge">About Us</div>
                    <h1 className="about-main-title">
                        We're Passionate About
                        <span className="gradient-text"> Excellence</span>
                    </h1>
                    <p className="about-hero-description">
                        Building the future of e-commerce, one exceptional product at a time.
                        Our mission is to deliver quality, innovation, and unmatched customer service.
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="about-story">
                <div className="about-content-wrapper">
                    <div className="story-left">
                        <h2 className="story-title">Our Story</h2>
                        <p className="story-text">
                            Founded in 2014, we started with a simple vision: to create an online
                            shopping experience that combines quality products with exceptional service.
                            Today, we're proud to serve customers worldwide.
                        </p>
                        <p className="story-text">
                            Our team is dedicated to curating only the best products, ensuring every
                            item meets our rigorous standards for quality, sustainability, and value.
                        </p>
                        <div className="story-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Premium Quality Products</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Sustainable Practices</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Customer First Approach</span>
                            </div>
                        </div>
                    </div>

                    <div className="story-right">
                        <div className="stats-grid">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="stat-card">
                                    <div className="stat-number-large">{achievement.number}</div>
                                    <div className="stat-label-large">{achievement.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="team-section">
                <h2 className="team-title">Meet Our Team</h2>
                <p className="team-subtitle">The talented people behind our success</p>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-avatar">{member.emoji}</div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Values Section */}
            <div className="values-section">
                <h2 className="values-title">Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">💡</div>
                        <h3 className="value-title">Innovation</h3>
                        <p className="value-text">Constantly evolving to bring you the latest and greatest</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3 className="value-title">Integrity</h3>
                        <p className="value-text">Honest, transparent, and ethical in everything we do</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">❤️</div>
                        <h3 className="value-title">Customer Love</h3>
                        <p className="value-text">Your satisfaction is our top priority</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
