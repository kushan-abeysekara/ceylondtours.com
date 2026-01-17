import React, { useEffect } from 'react';
import './Sigiriya.css';

const Colombo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" alt="Colombo" />
        <div className="dest-badge">Colombo</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
                alt="Colombo City"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Colombo?</h1>
              <p className="dest-description">
                Colombo is a vibrant city featuring modern skyscrapers, shopping malls, and historic buildings. It reflects Sri Lanka's economic and cultural diversity.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable city travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Flexible sightseeing plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Smooth urban experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 City Tour</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Colombo is a vibrant city featuring modern skyscrapers, shopping malls, and historic buildings. It reflects Sri Lanka's economic and cultural diversity.
              </p>
              <p className="dest-bottom-text">
                Visitors can enjoy museums, markets, dining, and coastal walks, making Colombo an exciting urban destination.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800"
                alt="Colombo Skyline"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Colombo;
