import React, { useEffect } from 'react';
import './Sigiriya.css';

function Negombo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Negombo</h1>
          <p className="dest-hero-subtitle">
            A lively coastal town located close to the international airport.
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
                alt="Negombo Beach"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Negombo?</h2>
              <p className="dest-description">
                Negombo is a popular entry and exit point for travelers due to its proximity to Bandaranaike International Airport. The town is known for its fishing industry and sandy beaches.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Convenient travel arrangements</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Flexible short-stay plans</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Comfortable coastal experience</span>
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
          <h2 className="dest-section-title">Experience Negombo</h2>
          <p className="dest-description">
            Negombo is a popular entry and exit point for travelers due to its proximity to Bandaranaike International Airport. The town is known for its fishing industry and sandy beaches.
          </p>
          <p className="dest-description">
            Visitors can explore the fish market, Dutch canals, churches, and enjoy fresh seafood. Negombo is ideal for short stays and relaxation after long journeys.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800"
            alt="Negombo Market"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Negombo Visit</h2>
        <p>Let us create the perfect stopover experience for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default Negombo;
