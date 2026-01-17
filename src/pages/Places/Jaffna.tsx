import React, { useEffect } from 'react';
import './Sigiriya.css';

const Jaffna: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1600" alt="Jaffna" />
        <div className="dest-badge">Jaffna</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800"
                alt="Jaffna Temple"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Jaffna?</h1>
              <p className="dest-description">
                Jaffna is a unique city in northern Sri Lanka known for its distinct Tamil culture, ancient temples, and colonial influences. The region offers a deep cultural experience different from other parts of the island.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cultural and heritage-focused travel
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
                  Comfortable travel arrangements
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Cultural Tour</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Jaffna is a unique city in northern Sri Lanka known for its distinct Tamil culture, ancient temples, and colonial influences. The region offers a deep cultural experience different from other parts of the island.
              </p>
              <p className="dest-bottom-text">
                Visitors can explore historic temples, libraries, forts, and enjoy authentic Jaffna cuisine. The city reflects resilience, tradition, and a strong cultural identity, making it an enriching travel destination.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
                alt="Jaffna Culture"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jaffna;
