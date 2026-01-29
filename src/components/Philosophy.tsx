import React from 'react';
import './Philosophy.css';

const Philosophy: React.FC = () => {
    return (
        <>
            {/* Quote Section */}
            <section className="philosophy-quote-section">
                <div className="quote-container">
                    <h2 className="philosophy-quote animate-on-scroll fade-in-up">
                        Beauty Is Personal. Confidence Is Timeless. Style Is Our Language.
                    </h2>
                    <div className="quote-underline animate-on-scroll scale-in animation-delay-200"></div>
                    <p className="philosophy-description animate-on-scroll fade-in-up animation-delay-300">
                        Every experience at Lumière is meticulously designed to enhance your individuality,
                        honoring your natural essence rather than following fleeting trends.
                    </p>
                </div>
            </section>

            {/* Evolution Process Section */}
            <section className="evolution-section">
                <div className="evolution-container">
                    <div className="evolution-header animate-on-scroll fade-in-up">
                        <span className="evolution-label">THE BEAUTY EXPERIENCE</span>
                        <h2 className="evolution-title">
                            The Evolution<br />Of Your Presence
                        </h2>
                    </div>

                    <div className="evolution-steps">
                        <div className="evolution-step animate-on-scroll slide-in-left animation-delay-100">
                            <div className="step-number">01</div>
                            <h3 className="step-title">Consultation & Understanding</h3>
                            <p className="step-description">
                                A personalized dialogue to understand your unique vision and style requirements.
                            </p>
                            <div className="step-arrow">
                                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 20 Q 60 0, 118 20" stroke="rgba(159, 166, 178, 0.3)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                    <path d="M112 16 L118 20 L112 24" stroke="rgba(159, 166, 178, 0.3)" strokeWidth="1" fill="none" />
                                </svg>
                            </div>
                        </div>

                        <div className="evolution-step animate-on-scroll slide-in-left animation-delay-200">
                            <div className="step-number">02</div>
                            <h3 className="step-title">Personalized Styling</h3>
                            <p className="step-description">
                                Expert execution using advanced techniques tailored specifically to your features.
                            </p>
                            <div className="step-arrow">
                                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 20 Q 60 0, 118 20" stroke="rgba(159, 166, 178, 0.3)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                    <path d="M112 16 L118 20 L112 24" stroke="rgba(159, 166, 178, 0.3)" strokeWidth="1" fill="none" />
                                </svg>
                            </div>
                        </div>

                        <div className="evolution-step animate-on-scroll slide-in-left animation-delay-300">
                            <div className="step-number">03</div>
                            <h3 className="step-title">Luxury Care & Products</h3>
                            <p className="step-description">
                                Applying the world's finest, skin-safe brands to nourish and protect your beauty.
                            </p>
                            <div className="step-arrow">
                                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 20 Q 60 0, 118 20" stroke="rgba(159, 166, 178, 0.3)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                                    <path d="M112 16 L118 20 L112 24" stroke="rgba(159, 166, 178, 0.3)" strokeWidth="1" fill="none" />
                                </svg>
                            </div>
                        </div>

                        <div className="evolution-step animate-on-scroll slide-in-left animation-delay-400">
                            <div className="step-number">04</div>
                            <h3 className="step-title">Final Look & Confidence</h3>
                            <p className="step-description">
                                The grand reveal where style meets soul, leaving you with lasting confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Philosophy;
