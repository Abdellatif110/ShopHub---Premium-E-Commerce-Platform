import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

    const formatPrice = (priceCents) => {
        return `$${(priceCents / 100).toFixed(2)}`;
    };

    const subtotal = getCartTotal();
    const shipping = subtotal > 5000 ? 0 : 499; // Free shipping over $50
    const taxRate = 0.10;
    const tax = Math.round(subtotal * taxRate);
    const total = subtotal + shipping + tax;

    const handleQuantityChange = (productId, newQuantity) => {
        updateQuantity(productId, parseInt(newQuantity));
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-page">
                <div className="empty-cart">
                    <div className="empty-cart-icon">🛒</div>
                    <h2>Your cart is empty</h2>
                    <p>Add some amazing products to your cart!</p>
                    <Link to="/shop">
                        <button className="shop-now-btn">Start Shopping</button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="page-title">Review your order</div>

            <div className="checkout-grid">
                <div className="order-summary">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item-container">
                            <div className="delivery-date">
                                Estimated delivery: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                            </div>

                            <div className="cart-item-details-grid">
                                <img className="product-image" src={item.image} alt={item.name} />

                                <div className="cart-item-details">
                                    <div className="product-name">
                                        {item.name}
                                    </div>
                                    <div className="product-price">{formatPrice(item.priceCents)}</div>
                                    <div className="product-quantity">
                                        <span>
                                            Quantity:
                                            <select
                                                className="quantity-label"
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                            >
                                                {[...Array(10)].map((_, i) => (
                                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                ))}
                                            </select>
                                        </span>
                                        <span
                                            className="delete-quantity-link link-primary"
                                            onClick={() => removeFromCart(item.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Delete
                                        </span>
                                    </div>
                                </div>

                                <div className="delivery-options">
                                    <div className="delivery-options-title">
                                        Choose a delivery option:
                                    </div>
                                    <div className="delivery-option">
                                        <input
                                            type="radio"
                                            className="delivery-option-input"
                                            name={`delivery-option-${item.id}`}
                                            defaultChecked
                                        />
                                        <div>
                                            <div className="delivery-option-date">
                                                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                            </div>
                                            <div className="delivery-option-price">FREE Shipping</div>
                                        </div>
                                    </div>
                                    <div className="delivery-option">
                                        <input
                                            type="radio"
                                            className="delivery-option-input"
                                            name={`delivery-option-${item.id}`}
                                        />
                                        <div>
                                            <div className="delivery-option-date">
                                                {new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                            </div>
                                            <div className="delivery-option-price">$4.99 - Shipping</div>
                                        </div>
                                    </div>
                                    <div className="delivery-option">
                                        <input
                                            type="radio"
                                            className="delivery-option-input"
                                            name={`delivery-option-${item.id}`}
                                        />
                                        <div>
                                            <div className="delivery-option-date">
                                                {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                                            </div>
                                            <div className="delivery-option-price">$9.99 - Shipping</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="payment-summary">
                    <div className="payment-summary-title">Order Summary</div>

                    <div className="payment-summary-row">
                        <div>Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)}):</div>
                        <div className="payment-summary-money">{formatPrice(subtotal)}</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Shipping &amp; handling:</div>
                        <div className="payment-summary-money">{formatPrice(shipping)}</div>
                    </div>

                    <div className="payment-summary-row subtotal-row">
                        <div>Total before tax:</div>
                        <div className="payment-summary-money">{formatPrice(subtotal + shipping)}</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Estimated tax (10%):</div>
                        <div className="payment-summary-money">{formatPrice(tax)}</div>
                    </div>

                    <div className="payment-summary-row total-row">
                        <div>Order total:</div>
                        <div className="payment-summary-money">{formatPrice(total)}</div>
                    </div>

                    <Link to="/orders">
                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
