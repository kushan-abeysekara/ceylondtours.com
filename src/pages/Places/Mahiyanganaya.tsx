import React, { useEffect } from 'react';
import './Sigiriya.css';

function Mahiyanganaya() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Mahiyanganaya</h1>
          <p className="dest-hero-subtitle">
            An ancient settlement linked to Sri Lanka's indigenous Vedda culture.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
                alt="Mahiyanganaya Temple"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Mahiyanganaya?</h2>
              <p className="dest-description">
                Mahiyanganaya is considered one of the oldest settlements in Sri Lanka and holds deep historical and religious importance. It is closely associated with the island's indigenous Vedda community.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Cultural heritage exploration</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Guided historical visits</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Smooth travel experience</span>
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
          <h2 className="dest-section-title">Experience Mahiyanganaya</h2>
          <p className="dest-description">
            Mahiyanganaya is considered one of the oldest settlements in Sri Lanka and holds deep historical and religious importance. It is closely associated with the island's indigenous Vedda community.
          </p>
          <p className="dest-description">
            Visitors can explore ancient temples, cultural sites, and learn about early Sri Lankan civilization. The area offers a unique blend of history, culture, and tradition.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800"
            alt="Mahiyanganaya Culture"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Mahiyanganaya Journey</h2>
        <p>Let us create the perfect cultural experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Mahiyanganaya;
