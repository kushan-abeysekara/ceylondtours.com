import React, { useEffect } from 'react';
import './Sigiriya.css';

function SinharajaForest() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Sinharaja Forest</h1>
          <p className="dest-hero-subtitle">
            A UNESCO World Heritage tropical rainforest rich in biodiversity.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?w=800"
                alt="Sinharaja Forest"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Sinharaja Forest?</h2>
              <p className="dest-description">
                Sinharaja Forest Reserve is Sri Lanka's last remaining primary rainforest and is home to many endemic plant and animal species.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Eco-friendly travel plans</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Guided nature walks</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Calm and natural environment</span>
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
              <h3>Eco Tourism</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Sinharaja Forest</h2>
          <p className="dest-description">
            Sinharaja Forest Reserve is Sri Lanka's last remaining primary rainforest and is home to many endemic plant and animal species.
          </p>
          <p className="dest-description">
            Visitors can experience guided walks through dense forest trails, making it a paradise for nature lovers and researchers.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800"
            alt="Sinharaja Biodiversity"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Sinharaja Exploration</h2>
        <p>Let us create the perfect eco-tourism experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default SinharajaForest;
