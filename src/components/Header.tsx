import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        const href = e.currentTarget.getAttribute('href')

        // Close mobile menu on click
        setIsMobileMenuOpen(false)

        if (href && href.startsWith('#')) {
            const targetId = href.substring(1)
            const targetElement = document.getElementById(targetId)

            if (targetElement) {
                // Get the header height to offset the scroll position
                const headerHeight = 80
                const targetPosition = targetElement.offsetTop - headerHeight

                // Smooth scroll to the target position
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                })
            }
        }
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    <h2 className="logo-text">SALON</h2>
                </div>

                <button
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <a href="#home" className="nav-link" onClick={handleNavClick}>Home</a>
                    <a href="#services" className="nav-link" onClick={handleNavClick}>Services</a>
                    <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
                    <a href="#gallery" className="nav-link" onClick={handleNavClick}>Gallery</a>
                    <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
                    <button className="btn btn-primary mobile-only-btn">Book Now</button>
                    {/* Close button for mobile menu if preferred, but hamburger toggle works */}
                </nav>

                <div className="desktop-btn">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </header>
    )
}

export default Header
