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
                Pasikuda is a pristine beach destination on Sri Lanka's east coast, famous for its shallow, crystal-clear turquoise waters that extend far into the sea, making it one of the safest beaches for swimming in the country. The calm bay and soft sandy shores create an ideal environment for families and water sports enthusiasts.
              </p>
              <p className="dest-bottom-text">
                The beach offers excellent snorkeling, diving, and water sports opportunities, along with scenic coastal views and peaceful surroundings. With its clean environment, luxury resorts, and tranquil atmosphere, Pasikuda is perfect for relaxation and seaside enjoyment.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
                alt="Pasikuda Waters"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Ceylon D Tour Pasikuda experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides exceptional Pasikuda beach holiday packages with comfortable transportation, accommodation arrangements, and water sports coordination. Our services include snorkeling excursions, coastal sightseeing, and relaxation-focused itineraries. With Ceylon D Tour, you can enjoy Pasikuda's pristine beaches, safe swimming waters, and tranquil coastal beauty with personalized service, flexible scheduling, and trusted travel support for an unforgettable beach experience.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Pasikuda;
