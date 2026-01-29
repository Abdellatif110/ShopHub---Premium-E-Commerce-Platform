import React, { useState } from 'react';
import { products } from '../data/products';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [addedProducts, setAddedProducts] = useState(new Set());

    const addToCart = (productId) => {
        setAddedProducts(prev => new Set([...prev, productId]));
        setTimeout(() => {
            setAddedProducts(prev => {
                const newSet = new Set(prev);
                newSet.delete(productId);
                return newSet;
            });
        }, 2000);
    };

    const formatPrice = (priceCents) => {
        return `$${(priceCents / 100).toFixed(2)}`;
    };

    const getRatingImage = (stars) => {
        const rating = Math.round(stars * 10);
        return `/images/ratings/rating-${rating}.png`;
    };

    // Get unique categories
    const categories = ['all', ...new Set(products.flatMap(p => p.keywords))];
    const popularCategories = ['all', 'apparel', 'kitchen', 'sports', 'shoes'];

    // Filter products
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' ||
            product.keywords.includes(selectedCategory);
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="shop-page-premium">
            {/* Hero Section */}
            <div className="shop-hero">
                <div className="hero-content">
                    <h1 className="hero-title">Discover Amazing Products</h1>
                    <p className="hero-subtitle">Premium quality items at unbeatable prices</p>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="shop-controls">
                <div className="search-container-shop">
                    <input
                        type="text"
                        className="search-input-shop"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <span className="search-icon-shop">🔍</span>
                </div>

                <div className="category-filters">
                    {popularCategories.map(category => (
                        <button
                            key={category}
                            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products Count */}
            <div className="products-count">
                Showing <strong>{filteredProducts.length}</strong> products
            </div>

            {/* Products Grid */}
            <div className="products-grid-premium">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card-premium">
                        <div className="product-badge">
                            {product.rating.stars >= 4.5 && <span className="badge-premium">⭐ Premium</span>}
                        </div>

                        <div className="product-image-wrapper">
                            <img className="product-image-premium" src={product.image} alt={product.name} />
                            <div className="product-overlay">
                                <button className="quick-view-btn">Quick View</button>
                            </div>
                        </div>

                        <div className="product-info-premium">
                            <div className="product-category-tags">
                                {product.keywords.slice(0, 2).map(tag => (
                                    <span key={tag} className="product-tag">{tag}</span>
                                ))}
                            </div>

                            <h3 className="product-name-premium">
                                {product.name}
                            </h3>

                            <div className="product-rating-premium">
                                <img
                                    className="rating-stars-premium"
                                    src={getRatingImage(product.rating.stars)}
                                    alt={`${product.rating.stars} stars`}
                                />
                                <span className="rating-count-premium">({product.rating.count})</span>
                            </div>

                            <div className="product-price-section">
                                <span className="product-price-premium">
                                    {formatPrice(product.priceCents)}
                                </span>
                                {product.priceCents > 3000 && (
                                    <span className="original-price">
                                        {formatPrice(product.priceCents + 1000)}
                                    </span>
                                )}
                            </div>

                            <div className="product-actions-premium">
                                <select className="quantity-select-premium">
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>Qty: {i + 1}</option>
                                    ))}
                                </select>

                                <button
                                    className={`add-to-cart-premium ${addedProducts.has(product.id) ? 'added' : ''}`}
                                    onClick={() => addToCart(product.id)}
                                    disabled={addedProducts.has(product.id)}
                                >
                                    {addedProducts.has(product.id) ? (
                                        <>
                                            <span className="checkmark">✓</span> Added
                                        </>
                                    ) : (
                                        <>
                                            <span className="cart-icon-btn">🛒</span> Add to Cart
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="no-products">
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    );
};

export default Shop;
