import './Features.css'

const Features = () => {
    const features = [
        {
            number: '01',
            icon: '/icon/Why_choose_us_logo_1.png',
            title: 'Expert Stylists',
            description: 'Our internationally trained beauty professionals bring global standards to your personal grooming.'
        },
        {
            number: '02',
            icon: '/icon/Why_choose_us_logo_2.png',
            title: 'Luxury Products',
            description: 'We use only premium, dermatologist-approved beauty brands ensuring long-lasting health and radiance.'
        },
        {
            number: '03',
            icon: '/icon/Why_choose_us_logo_3.png',
            title: 'Calm Ambience',
            description: 'A meticulously designed space that provides tranquility, comfort, and a truly high-end escape.'
        },
        {
            number: '04',
            icon: '/icon/Why_choose_us_logo_4.png',
            title: 'Personalized Care',
            description: 'Every service is uniquely tailored to reflect your individual style, features, and preferences.'
        }
    ]

    return (
        <section id="about" className="features-section">
            <div className="container">
                <div className="features-header animate-on-scroll slide-in-left">
                    <div className="features-label">THE LUMIÈRE STANDARD</div>
                    <h2 className="features-title">Why Choose Us</h2>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card animate-on-scroll fade-in-up animation-delay-${(index + 2) * 100} hover-lift`}
                        >
                            <div className="feature-card-inner">
                                <div className="feature-icon-box">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="feature-icon"
                                    />
                                </div>
                                <div className="feature-number">{feature.number}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
