import React, { useEffect } from 'react';
import './Sigiriya.css';

const Negombo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600" alt="Negombo" />
        <div className="dest-badge">Negombo</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Negombo Beach"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Negombo?</h1>
              <p className="dest-description">
                Negombo is a popular entry and exit point for travelers due to its proximity to Bandaranaike International Airport. The town is known for its fishing industry and sandy beaches.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Convenient travel arrangements
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Flexible short-stay plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable coastal experience
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
                Negombo is a popular entry and exit point for travelers due to its proximity to Bandaranaike International Airport. The town is known for its fishing industry and sandy beaches.
              </p>
              <p className="dest-bottom-text">
                Visitors can explore the fish market, Dutch canals, churches, and enjoy fresh seafood. Negombo is ideal for short stays and relaxation after long journeys.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800"
                alt="Negombo Market"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Negombo;
