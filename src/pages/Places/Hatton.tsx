import React, { useEffect } from 'react';
import './Sigiriya.css';

function Hatton() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Hatton</h1>
          <p className="dest-hero-subtitle">
            A tea estate town located near Adam's Peak.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1563968743333-044cef800494?w=800"
                alt="Hatton Tea Estates"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Hatton?</h2>
              <p className="dest-description">
                Hatton is surrounded by lush tea estates and rolling hills, offering stunning landscapes. It serves as a main base for pilgrims visiting Adam's Peak.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Scenic hill-country travel</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Guided plantation visits</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Relaxed experience</span>
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
          <h2 className="dest-section-title">Experience Hatton</h2>
          <p className="dest-description">
            Hatton is surrounded by lush tea estates and rolling hills, offering stunning landscapes. It serves as a main base for pilgrims visiting Adam's Peak.
          </p>
          <p className="dest-description">
            Visitors can enjoy tea plantation views, cool weather, and peaceful surroundings.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1587897773780-fe72528d6e52?w=800"
            alt="Hatton Tea Gardens"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Hatton Journey</h2>
        <p>Let us create the perfect tea estate experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Hatton;
