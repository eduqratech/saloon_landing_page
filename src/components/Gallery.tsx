import './Gallery.css'

const Gallery = () => {
    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <div className="gallery-header">
                    <div className="gallery-title">
                        <p className="gallery-label">THE PORTFOLIO</p>
                        <h2>Crafted Looks.<br />Visible Confidence.</h2>
                    </div>
                    <div className="gallery-description">
                        <p>
                            Explore our curated gallery of signature<br />
                            transformations and timeless looks designed in-<br />
                            house.
                        </p>
                    </div>
                </div>
                <div className="gallery-masonry">
                    <div className="gallery-col gallery-col-large">
                        <div className="gallery-item image-float-glow animate-on-scroll fade-in animation-delay-100">
                            <img src="/images/h1.png" alt="Salon stylist with client" />
                        </div>
                    </div>
                    <div className="gallery-col gallery-col-medium">
                        <div className="gallery-row gallery-row-split">
                            <div className="gallery-item gallery-item-small image-float-glow animate-on-scroll fade-in animation-delay-200">
                                <img src="/images/h2.png" alt="Hair products and tools" />
                            </div>
                            <div className="gallery-item gallery-item-small image-float-glow animate-on-scroll fade-in animation-delay-300">
                                <img src="/images/h3.png" alt="Salon interior" />
                            </div>
                        </div>
                        <div className="gallery-item gallery-item-medium image-float-glow animate-on-scroll fade-in animation-delay-400">
                            <img src="/images/h4.png" alt="Facial treatment" />
                        </div>
                    </div>
                    <div className="gallery-col gallery-col-right">
                        <div className="gallery-item gallery-item-right image-float-glow animate-on-scroll fade-in animation-delay-500">
                            <img src="/images/h5.png" alt="Personal styling" />
                        </div>
                        <div className="gallery-item gallery-item-right image-float-glow animate-on-scroll fade-in animation-delay-600">
                            <img src="/images/h6.png" alt="Happy client" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
