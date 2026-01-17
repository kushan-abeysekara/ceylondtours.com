import React, { useEffect } from 'react';
import './Sigiriya.css';

function Matara() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Matara</h1>
          <p className="dest-hero-subtitle">
            A southern coastal city with rich heritage and beautiful beaches.
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
                alt="Matara Coast"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Matara?</h2>
              <p className="dest-description">
                Matara is a historic city located along the southern coast of Sri Lanka. It features colonial buildings, temples, and scenic beaches.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Coastal sightseeing</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Cultural exploration</span>
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
              <h3>Sightseeing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Matara</h2>
          <p className="dest-description">
            Matara is a historic city located along the southern coast of Sri Lanka. It features colonial buildings, temples, and scenic beaches.
          </p>
          <p className="dest-description">
            The city offers a balance of cultural history and seaside relaxation.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
            alt="Matara Beach"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Matara Visit</h2>
        <p>Let us create the perfect coastal heritage experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Matara;
