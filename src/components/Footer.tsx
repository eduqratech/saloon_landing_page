import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>SALON</h3>
                        <p>Your destination for beauty and elegance</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <p>📍 Gallery milinium plaza upperpally chintalmate road Rangareddy Hyderbad 500048</p>
                        <p>📞 +91 9618344086</p>
                        <p>✉️ sureshpeddinti221@gmail.com</p>
                        <p>
                            <a href="https://www.linkedin.com/in/suresh-peddinti-5b6941232" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                                🔗 Connect on LinkedIn
                            </a>
                        </p>
                    </div>
                    <div className="footer-section">
                        <h4>Opening Hours</h4>
                        <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                        <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Salon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
