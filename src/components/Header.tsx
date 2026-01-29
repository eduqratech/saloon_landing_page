import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)

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

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    <h2 className="logo-text">SALON</h2>
                </div>
                <nav className="nav">
                    <a href="#home" className="nav-link" onClick={handleNavClick}>Home</a>
                    <a href="#services" className="nav-link" onClick={handleNavClick}>Services</a>
                    <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
                    <a href="#gallery" className="nav-link" onClick={handleNavClick}>Gallery</a>
                    <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
                </nav>
                <button className="btn btn-primary">Book Now</button>
            </div>
        </header>
    )
}

export default Header
