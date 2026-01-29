import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container-premium" id="home">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>
                </div>

                <div className="hero-content-wrapper">
                    <div className="hero-badge">
                        <span className="badge-icon">✨</span>
                        Welcome to the Future
                    </div>

                    <h1 className="hero-main-title">
                        Discover Amazing
                        <span className="gradient-text"> Products</span>
                    </h1>

                    <p className="hero-description">
                        Experience the next generation of online shopping with our curated collection
                        of premium products. Quality, style, and innovation combined.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/shop">
                            <button className="btn-primary-hero">
                                <span>Start Shopping</span>
                                <span className="btn-arrow">→</span>
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="btn-secondary-hero">
                                <span>Learn More</span>
                            </button>
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Happy Customers</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Premium Products</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">4.9★</div>
                            <div className="stat-label">Average Rating</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div className="features-container">
                    <div className="feature-card">
                        <div className="feature-icon">🚚</div>
                        <h3 className="feature-title">Free Shipping</h3>
                        <p className="feature-text">On orders over $50</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3 className="feature-title">Secure Payment</h3>
                        <p className="feature-text">100% protected</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">💎</div>
                        <h3 className="feature-title">Premium Quality</h3>
                        <p className="feature-text">Verified products</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">🎁</div>
                        <h3 className="feature-title">Special Offers</h3>
                        <p className="feature-text">Exclusive deals</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
