import React, { useEffect } from 'react';
import './Sigiriya.css';

function PidurangalaRock() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Pidurangala Rock</h1>
          <p className="dest-hero-subtitle">
            A scenic viewpoint offering panoramic views of Sigiriya Rock.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Pidurangala Rock"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Pidurangala Rock?</h2>
              <p className="dest-description">
                Pidurangala Rock is located close to Sigiriya and offers a less crowded hiking experience. The climb leads to a flat summit with breathtaking views.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Guided hiking options</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Safe climbing experience</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Peaceful natural setting</span>
                </div>
              </div>
            </div>
          </div>

          <div className="dest-info-cards">
            <div className="dest-info-card">
              <h3>Land Trip</h3>
            </div>
            <div className="dest-info-card">
              <h3>1 Day</h3>
            </div>
            <div className="dest-info-card">
              <h3>Hiking & Sightseeing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Pidurangala Rock</h2>
          <p className="dest-description">
            Pidurangala Rock is located close to Sigiriya and offers a less crowded hiking experience. The climb leads to a flat summit with breathtaking views.
          </p>
          <p className="dest-description">
            Visitors can enjoy sunrise or sunset views overlooking Sigiriya and the surrounding forests. It is ideal for adventure lovers and photographers.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
            alt="Pidurangala View"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Pidurangala Climb</h2>
        <p>Let us create the perfect hiking adventure for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default PidurangalaRock;
