import React, { useEffect } from 'react';
import './Sigiriya.css';

function Kitulgala() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Kitulgala</h1>
          <p className="dest-hero-subtitle">
            Sri Lanka's adventure capital, famous for white-water rafting.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
                alt="Kitulgala River"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Kitulgala?</h2>
              <p className="dest-description">
                Kitulgala is located near the Kelani River and is best known for white-water rafting and outdoor adventures. Surrounded by lush rainforests, it offers thrilling experiences in a natural setting.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Safe adventure activities</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Professional guides</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Exciting and smooth travel experience</span>
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
              <h3>Adventure & Nature</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Kitulgala</h2>
          <p className="dest-description">
            Kitulgala is located near the Kelani River and is best known for white-water rafting and outdoor adventures. Surrounded by lush rainforests, it offers thrilling experiences in a natural setting.
          </p>
          <p className="dest-description">
            Apart from rafting, visitors can enjoy jungle trekking, bird watching, and exploring caves. Kitulgala is ideal for travelers looking for excitement and nature combined.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
            alt="Kitulgala Adventure"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Kitulgala Adventure</h2>
        <p>Let us create the perfect thrill-seeking experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Kitulgala;
