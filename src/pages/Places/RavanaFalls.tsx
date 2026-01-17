import React, { useEffect } from 'react';
import './Sigiriya.css';

const RavanaFalls: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1600" alt="Ravana Falls" />
        <div className="dest-badge">Ravana Falls</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800"
                alt="Ravana Falls"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Ravana Falls?</h1>
              <p className="dest-description">
                Ravana Falls is one of Sri Lanka's most iconic waterfalls, located near Ella. According to legend, it is associated with King Ravana from the Ramayana.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Scenic travel routes
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Easy sightseeing access
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxed travel experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 1 Day</span>
                <span>🎯 Sightseeing</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Ravana Falls is one of Sri Lanka's most iconic waterfalls, located near Ella. According to legend, it is associated with King Ravana from the Ramayana.
              </p>
              <p className="dest-bottom-text">
                The waterfall is easily accessible and surrounded by natural beauty. It is a popular spot for photography and short nature stops.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800"
                alt="Ravana Falls View"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RavanaFalls;
