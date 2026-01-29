import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartQuantity = 0 }) => {
    return (
        <header className="ecommerce-header">
            <div className="header-left">
                <Link to="/shop" className="header-link">
                    <img className="logo" src="/images/logo-white.png" alt="Logo" />
                </Link>
            </div>

            <div className="header-middle">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search products..."
                />
                <button className="search-button">
                    <img className="search-icon" src="/images/icons/search-icon.png" alt="Search" />
                </button>
            </div>

            <div className="header-right">
                <Link to="/orders" className="header-link orders-link">
                    <span className="orders-text">Orders</span>
                </Link>

                <Link to="/checkout" className="header-link cart-link">
                    <img className="cart-icon" src="/images/icons/cart-icon.png" alt="Cart" />
                    <div className="cart-quantity">{cartQuantity}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
