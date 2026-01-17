import React, { useEffect } from 'react';
import './Sigiriya.css';

function RavanaFalls() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Ravana Falls</h1>
          <p className="dest-hero-subtitle">
            A famous waterfall connected to ancient legends and folklore.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="dest-main-section">
        <div className="dest-container">
          <div className="dest-content-grid">
            <div className="dest-content-left">
              <img
                src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800"
                alt="Ravana Falls"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Ravana Falls?</h2>
              <p className="dest-description">
                Ravana Falls is one of Sri Lanka's most iconic waterfalls, located near Ella. According to legend, it is associated with King Ravana from the Ramayana.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Scenic travel routes</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Easy sightseeing access</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Relaxed travel experience</span>
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
              <h3>Sightseeing</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="dest-bottom-section">
        <div className="dest-bottom-right">
          <h2 className="dest-section-title">Experience Ravana Falls</h2>
          <p className="dest-description">
            Ravana Falls is one of Sri Lanka's most iconic waterfalls, located near Ella. According to legend, it is associated with King Ravana from the Ramayana.
          </p>
          <p className="dest-description">
            The waterfall is easily accessible and surrounded by natural beauty. It is a popular spot for photography and short nature stops.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800"
            alt="Ravana Falls View"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Ravana Falls Visit</h2>
        <p>Let us create the perfect nature stop for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default RavanaFalls;
