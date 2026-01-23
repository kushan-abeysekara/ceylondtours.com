import React, { useEffect } from 'react';
import './Sigiriya.css';
import nuwara1 from '../../img/webp/nuwaraeliya1.webp';
import nuwara2 from '../../img/webp/nuwaraeliya2.webp';
import nuwara3 from '../../img/webp/nuwaraeliya3.webp';
import nuwara4 from '../../img/webp/nuwaraeliya4.webp';

const NuwaraEliya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={nuwara1} alt="Nuwara Eliya" />
        <div className="dest-badge">Nuwara Eliya</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={nuwara2} alt="Nuwara Eliya tea gardens" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Nuwara Eliya</h1>
              <p className="dest-description">
                A charming hill station known as "Little England" with cool weather and tea gardens.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Scenic hill-country routes
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Leisure sightseeing
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxing travel experience
                </li>
              </ul>

              <div className="dest-meta">
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Land Trip</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>2 Days</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Sightseeing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Nuwara Eliya, often called "Little England," is Sri Lanka's most famous hill station, located at 1,868 meters above sea level. The town is known for its cool climate, misty mountains, colonial-era architecture, and sprawling tea plantations that produce some of the world's finest Ceylon tea.
              </p>
              <p className="dest-bottom-text">
                Visitors can explore tea factories, stroll through Victoria Park, enjoy boating on Gregory Lake, and visit scenic waterfalls. The town's refreshing atmosphere, lush landscapes, and British colonial charm make Nuwara Eliya a perfect retreat from tropical heat.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={nuwara3} alt="Nuwara Eliya landscape" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={nuwara4} alt="Ceylon D Tour Nuwara Eliya experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers tailored Nuwara Eliya travel experiences with comfortable transportation through scenic hill-country roads, tea plantation visits, and flexible sightseeing itineraries. Our packages include tours of tea factories, botanical gardens, waterfalls, and historic landmarks. With personalized service, accommodation assistance, and expert local guidance, Ceylon D Tour ensures a memorable exploration of Nuwara Eliya's cool climate, natural beauty, and colonial heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default NuwaraEliya;
