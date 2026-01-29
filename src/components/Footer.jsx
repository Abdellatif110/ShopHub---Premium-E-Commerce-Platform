import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-premium">
            <div className="footer-content">
                {/* Footer Top */}
                <div className="footer-top">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <span className="logo-icon">🛍️</span>
                            <span className="logo-text">ShopHub</span>
                        </div>
                        <p className="footer-description">
                            Your trusted destination for premium products and exceptional shopping experiences.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <span>📘</span>
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <span>🐦</span>
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <span>📷</span>
                            </a>
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <span>💼</span>
                            </a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/orders">My Orders</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Customer Service</h3>
                        <ul className="footer-links">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Shipping Info</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">Newsletter</h3>
                        <p className="newsletter-text">Subscribe to get special offers and updates</p>
                        <div className="newsletter-form">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                            />
                            <button className="newsletter-button">
                                <span>→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="copyright">
                            © {currentYear} ShopHub. All rights reserved.
                        </p>
                        <div className="footer-bottom-links">
                            <a href="#">Privacy Policy</a>
                            <span className="separator">•</span>
                            <a href="#">Terms of Service</a>
                            <span className="separator">•</span>
                            <a href="#">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
