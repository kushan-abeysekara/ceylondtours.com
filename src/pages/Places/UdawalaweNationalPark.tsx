import React, { useEffect } from 'react';
import './Sigiriya.css';

function UdawalaweNationalPark() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dest-detail-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <div className="dest-hero-overlay">
          <h1 className="dest-hero-title">Discover Udawalawe National Park</h1>
          <p className="dest-hero-subtitle">
            A renowned wildlife sanctuary best known for elephant sightings in natural habitats.
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
                alt="Udawalawe Elephants"
                className="dest-main-image"
              />
            </div>
            <div className="dest-content-right">
              <h2 className="dest-section-title">Why Visit Udawalawe National Park?</h2>
              <p className="dest-description">
                Udawalawe National Park is one of the best places in Sri Lanka to see wild elephants roaming freely. The park consists of open grasslands, water reservoirs, and forests, creating ideal conditions for wildlife viewing.
              </p>
              <div className="dest-features">
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Safe and guided safari experiences</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Flexible safari schedules</span>
                </div>
                <div className="dest-feature-item">
                  <span className="dest-feature-icon">✓</span>
                  <span className="dest-feature-text">Smooth and comfortable travel</span>
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
          <h2 className="dest-section-title">Experience Udawalawe National Park</h2>
          <p className="dest-description">
            Udawalawe National Park is one of the best places in Sri Lanka to see wild elephants roaming freely. The park consists of open grasslands, water reservoirs, and forests, creating ideal conditions for wildlife viewing.
          </p>
          <p className="dest-description">
            Visitors can enjoy jeep safaris led by experienced guides, offering sightings of elephants, buffalo, deer, birds, and other animals. Udawalawe is a must-visit destination for wildlife lovers and photographers.
          </p>
        </div>
        <div className="dest-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1551799651-48e8ad90065b?w=800"
            alt="Udawalawe Wildlife"
            className="dest-bottom-image"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta-section">
        <h2>Plan Your Udawalawe Safari</h2>
        <p>Let us create the perfect wildlife adventure for you</p>
        <button className="dest-cta-button">Contact Us Today</button>
      </section>
    </div>
  );
}

export default UdawalaweNationalPark;
