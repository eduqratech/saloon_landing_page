import './Services.css'

const Services = () => {
    const services = [
        { title: 'Hair Styling & Color', img: '/images/s1.png' },
        { title: 'Bridal & Occasion Makeup', img: '/images/s2.png' },
        { title: 'Skin & Facial Rituals', img: '/images/s3.png' },
        { title: 'Hair Spa & Care', img: '/images/s4.png' },
        { title: 'Nail & Beauty Treatments', img: '/images/s5.png' },
        { title: 'Personal Grooming', img: '/images/s6.png' }
    ]

    return (
        <section id="services" className="section signature-section">
            <div className="container">
                <div className="section-header text-center animate-on-scroll fade-in-up">
                    <h2>Our Signature Services</h2>
                    <p>Experience luxury treatments tailored for you</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card card animate-on-scroll scale-in animation-delay-${(index + 1) * 100} hover-lift image-zoom`}
                        >
                            <div className="image-wrapper">
                                <img src={service.img} alt={service.title} />
                                <div className="image-overlay">
                                    <button className="btn btn-outline btn-animate">Learn More</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
