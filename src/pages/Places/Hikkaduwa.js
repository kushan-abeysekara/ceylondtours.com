import React, { useEffect } from 'react';
import './Sigiriya.css';

function Hikkaduwa() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Hikkaduwa</h1>
          <p className="dest-hero-subtitle">
            A lively beach town famous for coral reefs, snorkeling, and vibrant nightlife.
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
                alt="Hikkaduwa Beach"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Hikkaduwa?</h2>
              <p className="dest-description">
                Hikkaduwa is one of Sri Lanka's most popular beach destinations, well known for its colorful coral reefs and clear waters. It offers excellent opportunities for snorkeling, scuba diving, and glass-bottom boat rides, allowing visitors to explore marine life up close.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Safe and reliable coastal travel arrangements</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Flexible beach and activity schedules</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Fun-filled and relaxing travel experience</span>
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
          <h2 className="dest-section-title">Experience Hikkaduwa</h2>
          <p className="dest-description">
            Hikkaduwa is one of Sri Lanka's most popular beach destinations, well known for its colorful coral reefs and clear waters. It offers excellent opportunities for snorkeling, scuba diving, and glass-bottom boat rides, allowing visitors to explore marine life up close.
          </p>
          <p className="dest-description">
            In addition to water activities, Hikkaduwa is famous for its beachside restaurants, music, and nightlife. The combination of adventure, relaxation, and entertainment makes it an ideal destination for young travelers and beach lovers.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800"
            alt="Hikkaduwa Marine Life"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Hikkaduwa Adventure</h2>
        <p>Let us create the perfect beach getaway for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Hikkaduwa;
