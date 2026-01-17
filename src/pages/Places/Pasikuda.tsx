import React, { useEffect } from 'react';
import './Sigiriya.css';

const Pasikuda: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600" alt="Pasikuda" />
        <div className="dest-badge">Pasikuda</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Pasikuda Beach"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Pasikuda?</h1>
              <p className="dest-description">
                Pasikuda Beach is known for its shallow, crystal-clear waters that extend far into the sea, making it safe for swimming. The beach is clean, quiet, and well-maintained.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable beachside travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Family-friendly plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful and smooth experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Beach & Leisure</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Pasikuda Beach is known for its shallow, crystal-clear waters that extend far into the sea, making it safe for swimming. The beach is clean, quiet, and well-maintained.
              </p>
              <p className="dest-bottom-text">
                It is perfect for families, couples, and travelers looking for relaxation. The calm environment and scenic beauty make Pasikuda one of Sri Lanka's best beach destinations.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
                alt="Pasikuda Waters"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pasikuda;
