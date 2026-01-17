import React, { useEffect } from 'react';
import './Sigiriya.css';

function Colombo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Colombo</h1>
          <p className="dest-hero-subtitle">
            Sri Lanka's commercial capital blending modern life and colonial heritage.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                alt="Colombo City"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Colombo?</h2>
              <p className="dest-description">
                Colombo is a vibrant city featuring modern skyscrapers, shopping malls, and historic buildings. It reflects Sri Lanka's economic and cultural diversity.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Comfortable city travel</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Flexible sightseeing plans</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Smooth urban experience</span>
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
              <h3>City Tour</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Colombo</h2>
          <p className="dest-description">
            Colombo is a vibrant city featuring modern skyscrapers, shopping malls, and historic buildings. It reflects Sri Lanka's economic and cultural diversity.
          </p>
          <p className="dest-description">
            Visitors can enjoy museums, markets, dining, and coastal walks, making Colombo an exciting urban destination.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800"
            alt="Colombo Skyline"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Colombo City Tour</h2>
        <p>Let us create the perfect urban experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Colombo;
