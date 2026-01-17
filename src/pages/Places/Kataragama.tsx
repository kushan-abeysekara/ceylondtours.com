import React, { useEffect } from 'react';
import './Sigiriya.css';

const Kataragama: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1600" alt="Kataragama" />
        <div className="dest-badge">Kataragama</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800"
                alt="Kataragama Temple"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Kataragama?</h1>
              <p className="dest-description">
                Kataragama is one of Sri Lanka's most important religious sites, visited by Buddhists, Hindus, Muslims, and Christians.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Organized pilgrimage travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful spiritual atmosphere
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable arrangements
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Pilgrimage</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Kataragama is one of Sri Lanka's most important religious sites, visited by Buddhists, Hindus, Muslims, and Christians.
              </p>
              <p className="dest-bottom-text">
                The town offers a deeply spiritual experience with rituals, temples, and cultural traditions.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
                alt="Kataragama Rituals"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kataragama;
