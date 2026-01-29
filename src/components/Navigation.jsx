import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getCartCount } = useCart();

    const navLinks = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/section', label: 'Services', icon: '⚡' },
        { path: '/about', label: 'About', icon: '👥' },
        { path: '/shop', label: 'Shop', icon: '🛍️' }
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="premium-navigation">
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <span className="nav-logo-icon">🛍️</span>
                    <span className="nav-logo-text">ShopHub</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                        >
                            <span className="nav-link-icon">{link.icon}</span>
                            <span className="nav-link-text">{link.label}</span>
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="nav-actions">
                    <Link to="/orders" className="nav-action-btn">
                        <span className="action-icon">📦</span>
                        <span>Orders</span>
                    </Link>
                    <Link to="/checkout" className="nav-action-btn cart-btn">
                        <span className="action-icon">🛒</span>
                        <span>Cart</span>
                        {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span>{mobileMenuOpen ? '✕' : '☰'}</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="mobile-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-menu-link ${isActive(link.path) ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="nav-link-icon">{link.icon}</span>
                            <span>{link.label}</span>
                        </Link>
                    ))}
                    <Link
                        to="/orders"
                        className="mobile-menu-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="nav-link-icon">📦</span>
                        <span>Orders</span>
                    </Link>
                    <Link
                        to="/checkout"
                        className="mobile-menu-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <span className="nav-link-icon">🛒</span>
                        <span>Cart {getCartCount() > 0 && `(${getCartCount()})`}</span>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
