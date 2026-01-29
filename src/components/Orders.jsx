import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    const orders = [
        {
            id: '27cba69d-4c3d-4098-b42d-ac7fa62b7664',
            date: 'August 12, 2024',
            total: '$35.06',
            status: 'Delivered',
            deliveryDate: 'August 15',
            items: [
                {
                    id: 1,
                    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
                    image: '/images/products/athletic-cotton-socks-6-pairs.jpg',
                    quantity: 1,
                    price: '$10.90'
                }
            ]
        },
        {
            id: '8d3f2e4a-9c7b-4d5e-a6f1-b2c8d9e0f1a2',
            date: 'July 28, 2024',
            total: '$67.95',
            status: 'In Transit',
            deliveryDate: 'August 2',
            items: [
                {
                    id: 2,
                    name: 'Intermediate Size Basketball',
                    image: '/images/products/intermediate-composite-basketball.jpg',
                    quantity: 1,
                    price: '$20.95'
                },
                {
                    id: 3,
                    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
                    image: '/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
                    quantity: 2,
                    price: '$15.98'
                }
            ]
        }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Delivered':
                return 'status-delivered';
            case 'In Transit':
                return 'status-transit';
            case 'Processing':
                return 'status-processing';
            default:
                return '';
        }
    };

    return (
        <div className="orders-page-premium">
            {/* Header Section */}
            <div className="orders-hero">
                <div className="orders-hero-content">
                    <h1 className="orders-title">Your Orders</h1>
                    <p className="orders-subtitle">Track and manage all your purchases</p>
                </div>
            </div>

            {/* Orders List */}
            <div className="orders-container">
                {orders.map((order) => (
                    <div key={order.id} className="order-card-premium">
                        {/* Order Header */}
                        <div className="order-header-premium">
                            <div className="order-info-section">
                                <div className="order-info-item">
                                    <span className="info-label">Order Placed</span>
                                    <span className="info-value">{order.date}</span>
                                </div>
                                <div className="order-info-item">
                                    <span className="info-label">Total</span>
                                    <span className="info-value total-amount">{order.total}</span>
                                </div>
                                <div className="order-info-item">
                                    <span className="info-label">Status</span>
                                    <span className={`status-badge ${getStatusClass(order.status)}`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>
                            <div className="order-id-section">
                                <span className="info-label">Order ID</span>
                                <span className="order-id-value">{order.id.slice(0, 18)}...</span>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="order-items">
                            {order.items.map((item) => (
                                <div key={item.id} className="order-item-premium">
                                    <div className="item-image-container">
                                        <img src={item.image} alt={item.name} className="item-image" />
                                    </div>

                                    <div className="item-details-section">
                                        <h3 className="item-name">{item.name}</h3>
                                        <div className="item-meta">
                                            <span className="item-quantity">Qty: {item.quantity}</span>
                                            <span className="item-price">{item.price}</span>
                                        </div>
                                        {order.status !== 'Delivered' && (
                                            <div className="delivery-info">
                                                <span className="delivery-icon">🚚</span>
                                                <span className="delivery-text">
                                                    Arriving on: <strong>{order.deliveryDate}</strong>
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="item-actions-section">
                                        <Link to="/tracking">
                                            <button className="action-btn track-btn">
                                                <span className="btn-icon">📦</span>
                                                Track Package
                                            </button>
                                        </Link>
                                        <button className="action-btn buy-again-btn">
                                            <span className="btn-icon">🔄</span>
                                            Buy Again
                                        </button>
                                        <button className="action-btn review-btn">
                                            <span className="btn-icon">⭐</span>
                                            Write Review
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Empty State (if no orders) */}
                {orders.length === 0 && (
                    <div className="empty-orders">
                        <div className="empty-icon">📦</div>
                        <h3>No orders yet</h3>
                        <p>Start shopping to see your orders here</p>
                        <Link to="/shop">
                            <button className="shop-now-btn">Start Shopping</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
