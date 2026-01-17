import React, { useEffect } from 'react';
import './Sigiriya.css';

function WilpattuNationalPark() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Wilpattu National Park</h1>
          <p className="dest-hero-subtitle">
            A wildlife park famous for natural lakes and peaceful safaris.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800"
                alt="Wilpattu Leopard"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Wilpattu National Park?</h2>
              <p className="dest-description">
                Wilpattu National Park is Sri Lanka's largest national park and is known for its unique natural lakes called "villus."
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Quiet safari experiences</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Professional wildlife guides</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Comfortable travel</span>
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
              <h3>Wildlife Safari</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Wilpattu National Park</h2>
          <p className="dest-description">
            Wilpattu National Park is Sri Lanka's largest national park and is known for its unique natural lakes called "villus."
          </p>
          <p className="dest-description">
            The park offers chances to spot leopards, elephants, and birds in a calm, less crowded environment, ideal for nature enthusiasts.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1551799651-48e8ad90065b?w=800"
            alt="Wilpattu Wildlife"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Wilpattu Safari</h2>
        <p>Let us create the perfect wildlife experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default WilpattuNationalPark;
