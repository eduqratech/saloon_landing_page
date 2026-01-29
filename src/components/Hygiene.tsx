import './Hygiene.css'

const Hygiene = () => {
    const hygienePoints = [
        'Sterilized tools and equipment',
        'Regular sanitization protocols',
        'Fresh towels and linens',
        'Clean and maintained facilities',
        'Trained hygiene specialists',
        'Health and safety certified'
    ]

    return (
        <section className="section hygiene-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Excellence in Hygiene</h2>
                    <p>Your safety and well-being are our top priorities</p>
                </div>
                <div className="hygiene-grid">
                    {hygienePoints.map((item, index) => (
                        <div key={index} className="hygiene-item card">
                            <div className="hygiene-icon">✓</div>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hygiene
