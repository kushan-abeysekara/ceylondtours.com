import React, { useEffect } from 'react';
import './Sigiriya.css';

function Pasikuda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Pasikuda</h1>
          <p className="dest-hero-subtitle">
            A calm shallow beach ideal for swimming and relaxation.
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
                alt="Pasikuda Beach"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Pasikuda?</h2>
              <p className="dest-description">
                Pasikuda Beach is known for its shallow, crystal-clear waters that extend far into the sea, making it safe for swimming. The beach is clean, quiet, and well-maintained.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Comfortable beachside travel</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Family-friendly plans</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Peaceful and smooth experience</span>
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
              <h3>Beach & Leisure</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Pasikuda</h2>
          <p className="dest-description">
            Pasikuda Beach is known for its shallow, crystal-clear waters that extend far into the sea, making it safe for swimming. The beach is clean, quiet, and well-maintained.
          </p>
          <p className="dest-description">
            It is perfect for families, couples, and travelers looking for relaxation. The calm environment and scenic beauty make Pasikuda one of Sri Lanka's best beach destinations.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
            alt="Pasikuda Waters"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Pasikuda Getaway</h2>
        <p>Let us create the perfect beach retreat for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Pasikuda;
