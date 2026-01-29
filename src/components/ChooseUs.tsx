import './ChooseUs.css'

const ChooseUs = () => {
    const images = [
        '/images/Group 1597881429.png',
        '/images/Group 1597881430.png',
        '/images/Group 1597881431.png',
        '/images/Group 1597881432.png',
        '/images/Group 1597881433.png',
        '/images/Group 1597881434.png'
    ]

    return (
        <section className="section choose-section bg-secondary">
            <div className="container">
                <div className="choose-content">
                    <div className="choose-text">
                        <h2>A World Calls.<br />To One of a Kind.</h2>
                        <p>
                            Experience the epitome of luxury and sophistication at our salon.
                            We combine traditional techniques with modern innovations to deliver
                            exceptional results that exceed expectations.
                        </p>
                        <p>
                            Our team of expert stylists and beauty professionals are dedicated
                            to making you look and feel your absolute best.
                        </p>
                        <button className="btn btn-primary">Discover More</button>
                    </div>
                    <div className="choose-images">
                        <div className="image-grid-3">
                            {images.map((img, index) => (
                                <div key={index} className="grid-image-item image-wrapper">
                                    <img src={img} alt="Salon work" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs
