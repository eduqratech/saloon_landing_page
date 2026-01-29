import './Elevate.css'

const Elevate = () => {
    return (
        <section className="section elevate-section bg-secondary">
            <div className="container">
                <div className="elevate-content">
                    <div className="elevate-image image-wrapper">
                        <img src="/images/Group 1597881432.png" alt="Haircut service" />
                    </div>
                    <div className="elevate-text">
                        <h2>Elevate Your Haircut</h2>
                        <p>
                            Transform your look with our signature haircut services. Our expert
                            stylists create personalized styles that complement your features
                            and lifestyle.
                        </p>
                        <ul className="elevate-list">
                            <li>Consultation with expert stylists</li>
                            <li>Precision cutting techniques</li>
                            <li>Custom styling recommendations</li>
                            <li>Premium hair products</li>
                        </ul>
                        <button className="btn btn-primary">Book Your Cut</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Elevate
