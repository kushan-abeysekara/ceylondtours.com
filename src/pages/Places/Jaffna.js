import React, { useEffect } from 'react';
import './Sigiriya.css';

function Jaffna() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Jaffna</h1>
          <p className="dest-hero-subtitle">
            A cultural city showcasing rich Tamil heritage, history, and traditions.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800"
                alt="Jaffna Temple"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Jaffna?</h2>
              <p className="dest-description">
                Jaffna is a unique city in northern Sri Lanka known for its distinct Tamil culture, ancient temples, and colonial influences. The region offers a deep cultural experience different from other parts of the island.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Cultural and heritage-focused travel</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Guided city exploration</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Comfortable travel arrangements</span>
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
              <h3>Cultural Tour</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Jaffna</h2>
          <p className="dest-description">
            Jaffna is a unique city in northern Sri Lanka known for its distinct Tamil culture, ancient temples, and colonial influences. The region offers a deep cultural experience different from other parts of the island.
          </p>
          <p className="dest-description">
            Visitors can explore historic temples, libraries, forts, and enjoy authentic Jaffna cuisine. The city reflects resilience, tradition, and a strong cultural identity, making it an enriching travel destination.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
            alt="Jaffna Culture"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Jaffna Journey</h2>
        <p>Let us create the perfect cultural experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Jaffna;
