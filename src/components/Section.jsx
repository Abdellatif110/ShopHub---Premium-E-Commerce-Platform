import React from 'react';

const Section = () => {
    const services = [
        {
            icon: '🎨',
            title: 'Creative Design',
            description: 'Beautiful, modern designs that captivate and engage your audience.',
            color: '#667eea'
        },
        {
            icon: '⚡',
            title: 'High Performance',
            description: 'Lightning-fast load times and optimized user experiences.',
            color: '#f093fb'
        },
        {
            icon: '📱',
            title: 'Fully Responsive',
            description: 'Perfect display on all devices, from mobile to desktop.',
            color: '#4facfe'
        },
        {
            icon: '🔧',
            title: 'Easy Customization',
            description: 'Flexible and adaptable to meet your unique needs.',
            color: '#43e97b'
        },
        {
            icon: '🚀',
            title: 'Fast Delivery',
            description: 'Quick turnaround times without compromising quality.',
            color: '#fa709a'
        },
        {
            icon: '💯',
            title: 'Best Quality',
            description: 'Premium materials and craftsmanship in every product.',
            color: '#fee140'
        }
    ];

    return (
        <div className="section-container-premium" id="section">
            {/* Section Header */}
            <div className="section-header">
                <div className="section-badge">Our Services</div>
                <h2 className="section-main-title">
                    What We <span className="gradient-text">Offer</span>
                </h2>
                <p className="section-description">
                    Discover our comprehensive range of services designed to exceed your expectations
                </p>
            </div>

            {/* Services Grid */}
            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="service-icon-wrapper" style={{ background: `linear-gradient(135deg, ${service.color}22 0%, ${service.color}44 100%)` }}>
                            <div className="service-icon">{service.icon}</div>
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                        <div className="service-hover-effect" style={{ background: service.color }}></div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="section-cta">
                <h3 className="cta-title">Ready to Get Started?</h3>
                <p className="cta-text">Join thousands of satisfied customers today</p>
                <button className="cta-button">
                    <span>Explore Products</span>
                    <span className="btn-arrow">→</span>
                </button>
            </div>
        </div>
    );
};

export default Section;
