import './Hero.css'

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text animate-on-scroll fade-in-up">
                    <p className="hero-label">PREMIUM SALON & BEAUTY STUDIO</p>
                    <h1>Elevated Beauty<br />For The Modern<br />Woman</h1>
                    <p className="hero-subtitle">
                        Luxury hair, skin, and makeup services designed for<br />the modern woman who values excellence.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Book Appointment</button>
                        <a href="#services" className="btn-link">VIEW SERVICES →</a>
                    </div>
                </div>
                <div className="hero-images-custom">
                    <div className="hero-img-top-left animate-on-scroll fade-in animation-delay-100 image-float-glow">
                        <img src="/images/home1.png" alt="Facial treatment" />
                    </div>
                    <div className="hero-img-top-right animate-on-scroll fade-in animation-delay-200 image-float-glow">
                        <img src="/images/home 2.png" alt="Makeup application" />
                    </div>
                    <div className="hero-img-bottom-left animate-on-scroll fade-in animation-delay-300 image-float-glow">
                        <img src="/images/home 3.png" alt="Hair washing" />
                    </div>
                </div>
            </div>
            <div className="hero-tagline animate-on-scroll fade-in-up">
                <p>"Beauty Is Not A Trend. It's A Signature."</p>
            </div>
            <div className="hero-stats">
                <div className="stat-item animate-on-scroll scale-in animation-delay-100">
                    <h3>10+</h3>
                    <p>Years Of Expertise</p>
                </div>
                <div className="stat-item animate-on-scroll scale-in animation-delay-200">
                    <h3>5,000+</h3>
                    <p>Happy Clients</p>
                </div>
                <div className="stat-item animate-on-scroll scale-in animation-delay-300">
                    <h3>Premium</h3>
                    <p>Products Only</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
