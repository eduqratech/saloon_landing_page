import React, { useState } from 'react';
import './Booking.css';

const Booking: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        department: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <section id="contact" className="booking-section">
            <div className="booking-container">
                <div className="booking-card">
                    {/* Left Column - Contact Info */}
                    <div className="booking-info">
                        <h2 className="booking-info-title">
                            Ready To Start Your<br />New Look?
                        </h2>
                        <p className="booking-info-description">
                            Transform your style with our expert team. Schedule your personalized beauty consultation today and experience luxury at its finest.
                        </p>

                        <div className="booking-contact">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.3 14.3C17.1 14.3 15.9 14.1 14.8 13.7C14.5 13.6 14.1 13.7 13.9 13.9L12.2 15.6C9.4 14.2 5.8 10.6 4.4 7.8L6.1 6.1C6.3 5.9 6.4 5.5 6.3 5.2C5.9 4.1 5.7 2.9 5.7 1.7C5.7 1.3 5.4 1 5 1H1.7C1.3 1 1 1.3 1 1.7C1 11.6 9.1 19 18.3 19C18.7 19 19 18.7 19 18.3V15C19 14.6 18.7 14.3 18.3 14.3Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <span className="contact-label">Call Anytime, Anyhow</span>
                                    <span className="contact-value">+91 9818344086</span>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C14.4 2 18 5.6 18 10C18 14.4 14.4 18 10 18ZM10.5 5H9V11L14.2 14.2L15 12.9L10.5 10.2V5Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="contact-text">
                                    <span className="contact-value">Mon - Sat: 8am - 7pm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="booking-form-wrapper">
                        <h3 className="form-title">Request Callback</h3>
                        <form onSubmit={handleSubmit} className="booking-form">
                            <div className="form-group">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="department" className="form-label">Department</label>
                                <select
                                    id="department"
                                    name="department"
                                    value={formData.department}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                >
                                    <option value="">Select department</option>
                                    <option value="hair">Hair Services</option>
                                    <option value="skin">Skin & Facial</option>
                                    <option value="makeup">Makeup</option>
                                    <option value="nail">Nail & Beauty</option>
                                    <option value="bridal">Bridal Packages</option>
                                </select>
                            </div>

                            <button type="submit" className="form-submit-btn">
                                Book Appointment
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
