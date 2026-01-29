import React, { useState } from 'react';
import './Pricing.css';

interface Service {
    name: string;
    price: string;
}

interface ServiceCategory {
    id: string;
    name: string;
    services: Service[];
}

const Pricing: React.FC = () => {
    const categories: ServiceCategory[] = [
        {
            id: 'skin-facial',
            name: 'Skin & Facial',
            services: [
                { name: 'Classic Facial', price: '₹2,500' },
                { name: 'Anti-Aging Treatment', price: '₹4,500' },
                { name: 'Deep Cleansing Facial', price: '₹3,000' },
                { name: 'Hydrating Facial', price: '₹3,500' },
                { name: 'Vitamin C Therapy', price: '₹4,000' },
                { name: 'Microdermabrasion', price: '₹5,500' }
            ]
        },
        {
            id: 'hair-services',
            name: 'Hair Services',
            services: [
                { name: 'Signature Haircut', price: '₹1,500' },
                { name: 'Hair Styling & Blowout', price: '₹1,200' },
                { name: 'Global Hair Coloring', price: '₹5,500' },
                { name: 'Balayage & Highlights', price: '₹3,500' },
                { name: 'Luxury Hair Spa', price: '₹2,000' },
                { name: 'Keratin Smoothing', price: '₹6,000' }
            ]
        },
        {
            id: 'makeup',
            name: 'Makeup',
            services: [
                { name: 'Party Makeup', price: '₹3,500' },
                { name: 'Bridal Makeup', price: '₹15,000' },
                { name: 'Engagement Makeup', price: '₹8,000' },
                { name: 'HD Makeup', price: '₹5,000' },
                { name: 'Airbrush Makeup', price: '₹6,500' },
                { name: 'Pre-Wedding Makeup', price: '₹12,000' }
            ]
        },
        {
            id: 'nail-beauty',
            name: 'Nail & Beauty',
            services: [
                { name: 'Classic Manicure', price: '₹800' },
                { name: 'Classic Pedicure', price: '₹1,000' },
                { name: 'Gel Nail Extensions', price: '₹2,500' },
                { name: 'Nail Art Design', price: '₹1,500' },
                { name: 'French Manicure', price: '₹1,200' },
                { name: 'Spa Pedicure', price: '₹1,800' }
            ]
        },
        {
            id: 'bridal-packages',
            name: 'Bridal Packages',
            services: [
                { name: 'Complete Bridal Package', price: '₹45,000' },
                { name: 'Pre-Wedding Package', price: '₹25,000' },
                { name: 'Engagement Package', price: '₹20,000' },
                { name: 'Mehendi Ceremony Package', price: '₹15,000' },
                { name: 'Reception Package', price: '₹18,000' },
                { name: 'Destination Wedding Package', price: '₹60,000' }
            ]
        }
    ];

    const [activeCategory, setActiveCategory] = useState<string>('hair-services');

    const currentServices = categories.find(cat => cat.id === activeCategory)?.services || [];
    const currentCategoryName = categories.find(cat => cat.id === activeCategory)?.name || 'Hair Services';

    return (
        <section className="pricing-section">
            <div className="pricing-container">
                <div className="pricing-header animate-on-scroll fade-in-up">
                    <span className="pricing-label">THE SERVICE MENU</span>
                    <h2 className="pricing-title">Investment In Elegance</h2>
                </div>

                <div className="pricing-content animate-on-scroll scale-in animation-delay-200">
                    {/* Category Tabs */}
                    <div className="category-tabs">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`category-tab ${activeCategory === category.id ? 'active' : ''} hover-scale`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Services List */}
                    <div className="services-panel">
                        <h3 className="services-category-title">{currentCategoryName}</h3>
                        <div className="services-list">
                            {currentServices.map((service, index) => (
                                <div
                                    key={index}
                                    className="service-item"
                                    style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}
                                >
                                    <span className="service-name">{service.name}</span>
                                    <span className="service-line"></span>
                                    <span className="service-price">{service.price}</span>
                                </div>
                            ))}
                        </div>
                        <p className="pricing-note">
                            * Prices Are Starting Rates And May Vary Based On Length, Complexity, And Specific Products Used
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
