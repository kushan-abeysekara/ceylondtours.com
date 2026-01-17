import React, { useEffect } from 'react';
import './Sigiriya.css';

const PidurangalaRock: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600" alt="Pidurangala Rock" />
        <div className="dest-badge">Pidurangala Rock</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Pidurangala Rock"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Pidurangala Rock?</h1>
              <p className="dest-description">
                Pidurangala Rock is located close to Sigiriya and offers a less crowded hiking experience. The climb leads to a flat summit with breathtaking views.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided hiking options
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe climbing experience
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful natural setting
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 1 Day</span>
                <span>🎯 Hiking & Sightseeing</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Pidurangala Rock is located close to Sigiriya and offers a less crowded hiking experience. The climb leads to a flat summit with breathtaking views.
              </p>
              <p className="dest-bottom-text">
                Visitors can enjoy sunrise or sunset views overlooking Sigiriya and the surrounding forests. It is ideal for adventure lovers and photographers.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
                alt="Pidurangala View"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PidurangalaRock;
