import React, { useEffect } from 'react';
import './Sigiriya.css';

const UdawalaweNationalPark: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1600" alt="Udawalawe National Park" />
        <div className="dest-badge">Udawalawe National Park</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800"
                alt="Udawalawe Elephants"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Udawalawe National Park?</h1>
              <p className="dest-description">
                Udawalawe National Park is one of the best places in Sri Lanka to see wild elephants roaming freely. The park consists of open grasslands, water reservoirs, and forests, creating ideal conditions for wildlife viewing.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe and guided safari experiences
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Flexible safari schedules
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Smooth and comfortable travel
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Wildlife Safari</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Udawalawe National Park is one of the best places in Sri Lanka to see wild elephants roaming freely. The park consists of open grasslands, water reservoirs, and forests, creating ideal conditions for wildlife viewing.
              </p>
              <p className="dest-bottom-text">
                Visitors can enjoy jeep safaris led by experienced guides, offering sightings of elephants, buffalo, deer, birds, and other animals. Udawalawe is a must-visit destination for wildlife lovers and photographers.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1551799651-48e8ad90065b?w=800"
                alt="Udawalawe Wildlife"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UdawalaweNationalPark;
