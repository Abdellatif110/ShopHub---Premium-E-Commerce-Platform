import React from 'react';
import { Link } from 'react-router-dom';

const Tracking = () => {
    return (
        <div className="tracking-page">
            <Link to="/orders" className="back-to-orders-link link-primary">
                View all orders
            </Link>

            <div className="delivery-date">
                Arriving on Monday, June 13, 2022
            </div>

            <div className="product-info">
                Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div className="product-info">
                Quantity: 1
            </div>

            <img className="product-image" src="/images/products/athletic-cotton-socks-6-pairs.jpg" alt="Product" />

            <div className="progress-labels-container">
                <div className="progress-label current-status">Preparing</div>
                <div className="progress-label">Shipped</div>
                <div className="progress-label">Delivered</div>
            </div>

            <div className="progress-bar-container">
                <div className="progress-bar"></div>
            </div>
        </div>
    );
};

export default Tracking;
