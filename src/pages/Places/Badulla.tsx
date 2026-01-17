import React, { useEffect } from 'react';
import './Sigiriya.css';

const Badulla: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600" alt="Badulla" />
        <div className="dest-badge">Badulla</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Badulla Hills"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Badulla?</h1>
              <p className="dest-description">
                Badulla is located in the Uva Province and is known for its cool climate and natural beauty. The area is surrounded by mountains, tea plantations, and waterfalls.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable hill travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Nature-focused sightseeing
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Sightseeing</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Badulla is located in the Uva Province and is known for its cool climate and natural beauty. The area is surrounded by mountains, tea plantations, and waterfalls.
              </p>
              <p className="dest-bottom-text">
                It offers a calm environment ideal for relaxation and exploration of nearby attractions.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
                alt="Badulla Nature"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Badulla;
