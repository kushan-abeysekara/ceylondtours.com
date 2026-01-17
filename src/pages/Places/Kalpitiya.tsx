import React, { useEffect } from 'react';
import './Sigiriya.css';

function Kalpitiya() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Kalpitiya</h1>
          <p className="dest-hero-subtitle">
            A peaceful coastal region famous for dolphin watching and kite surfing.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Kalpitiya Coast"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Kalpitiya?</h2>
              <p className="dest-description">
                Kalpitiya is a hidden gem located along Sri Lanka's northwestern coast, surrounded by lagoons and pristine beaches. It is one of the best locations in the country to witness large pods of dolphins in their natural environment.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Eco-friendly travel options</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Adventure-based activities</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Relaxed and nature-focused experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dest-info-cards">
            <div className="dest-info-card">
              <h3>Land Trip</h3>
            </div>
            <div className="dest-info-card">
              <h3>2 Days</h3>
            </div>
            <div className="dest-info-card">
              <h3>Beach & Adventure</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Kalpitiya</h2>
          <p className="dest-description">
            Kalpitiya is a hidden gem located along Sri Lanka's northwestern coast, surrounded by lagoons and pristine beaches. It is one of the best locations in the country to witness large pods of dolphins in their natural environment.
          </p>
          <p className="dest-description">
            The area is also internationally recognized for kite surfing due to its strong winds and wide lagoons. Kalpitiya is perfect for travelers seeking adventure, eco-tourism, and peaceful surroundings.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800"
            alt="Kalpitiya Dolphins"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Kalpitiya Adventure</h2>
        <p>Let us create the perfect coastal experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Kalpitiya;
