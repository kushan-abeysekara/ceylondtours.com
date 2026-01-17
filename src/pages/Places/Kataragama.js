import React, { useEffect } from 'react';
import './Sigiriya.css';

function Kataragama() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Kataragama</h1>
          <p className="dest-hero-subtitle">
            A sacred pilgrimage town respected by multiple religions.
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
                alt="Kataragama Temple"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Kataragama?</h2>
              <p className="dest-description">
                Kataragama is one of Sri Lanka's most important religious sites, visited by Buddhists, Hindus, Muslims, and Christians.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Organized pilgrimage travel</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Peaceful spiritual atmosphere</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Comfortable arrangements</span>
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
              <h3>Pilgrimage</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Kataragama</h2>
          <p className="dest-description">
            Kataragama is one of Sri Lanka's most important religious sites, visited by Buddhists, Hindus, Muslims, and Christians.
          </p>
          <p className="dest-description">
            The town offers a deeply spiritual experience with rituals, temples, and cultural traditions.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
            alt="Kataragama Rituals"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Kataragama Pilgrimage</h2>
        <p>Let us create the perfect spiritual journey for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Kataragama;
