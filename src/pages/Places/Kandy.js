import React, { useEffect } from 'react';
import './Sigiriya.css';

const Kandy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" alt="Kandy" />
        <div className="dest-badge">Kandy</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src="https://images.unsplash.com/photo-1588971550723-4c4ae923cdbb?w=800" alt="Kandy lake" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Kandy</h1>
              <p className="dest-description">
                Sri Lanka's cultural capital and home to the sacred Temple of the Tooth Relic.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cultural heritage tours
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided city exploration
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable transport
                </li>
              </ul>

              <div className="dest-meta">
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Land Trip</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>2 Days</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Sightseeing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Kandy is a historic city nestled among green hills and centered around a picturesque lake. It was the last royal capital of Sri Lanka and remains an important cultural and religious center.
              </p>
              <p className="dest-bottom-text">
                The Temple of the Sacred Tooth Relic attracts pilgrims from around the world. Visitors can also enjoy traditional dance performances, botanical gardens, and local markets that reflect Sri Lanka's rich heritage.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800" alt="Kandy city" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kandy;
