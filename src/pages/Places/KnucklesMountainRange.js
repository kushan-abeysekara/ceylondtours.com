import React, { useEffect } from 'react';
import './Sigiriya.css';

function KnucklesMountainRange() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Knuckles Mountain Range</h1>
          <p className="dest-hero-subtitle">
            A breathtaking mountain range with misty peaks and scenic hiking trails.
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
                alt="Knuckles Mountain Range"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Knuckles Mountain Range?</h2>
              <p className="dest-description">
                The Knuckles Mountain Range is a UNESCO-listed conservation area known for its dramatic landscapes and rich biodiversity. Covered in mist and cloud forests, it offers stunning views and untouched natural beauty.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Guided trekking experiences</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Nature-focused travel plans</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Calm and refreshing environment</span>
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
              <h3>Nature & Hiking</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Knuckles Mountain Range</h2>
          <p className="dest-description">
            The Knuckles Mountain Range is a UNESCO-listed conservation area known for its dramatic landscapes and rich biodiversity. Covered in mist and cloud forests, it offers stunning views and untouched natural beauty.
          </p>
          <p className="dest-description">
            The area is ideal for trekking, bird watching, and nature exploration. Its peaceful atmosphere and challenging trails make it a perfect destination for adventure seekers and nature lovers.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
            alt="Knuckles Hiking"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Knuckles Adventure</h2>
        <p>Let us create the perfect hiking experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default KnucklesMountainRange;
