import React, { useEffect } from 'react';
import './Sigiriya.css';
import batticaloa1 from '../../img/webp/batticaloa.webp';
import batticaloa2 from '../../img/webp/batticaloa2.webp';
import batticaloa3 from '../../img/webp/batticaloa3.webp';
import batticaloa4 from '../../img/webp/batticaloa4.webp';

const Batticaloa: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={batticaloa1} alt="Batticaloa" />
        <div className="dest-badge">Batticaloa</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={batticaloa2}
                alt="Batticaloa Lagoon"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Batticaloa?</h1>
              <p className="dest-description">
                Batticaloa is famous for its lagoons, calm beaches, and rich eastern coastal culture. The city has a peaceful and laid-back atmosphere.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxed coastal travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cultural sightseeing
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Smooth travel arrangements
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
                Batticaloa is a historic eastern coastal city known for its scenic lagoon, pristine beaches, and unique "singing fish" phenomenon in the lagoon waters. The city features Dutch colonial architecture, ancient Hindu temples, churches, and a rich Tamil cultural heritage reflected in its festivals, cuisine, and traditions.
              </p>
              <p className="dest-bottom-text">
                Visitors can explore the Dutch Fort, Kallady Bridge spanning the lagoon, Pasikuda and Kalkudah beaches nearby, and experience authentic eastern Sri Lankan culture. The peaceful atmosphere, warm hospitality, and blend of history and coastal beauty make Batticaloa a rewarding off-the-beaten-path destination.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={batticaloa3}
                alt="Batticaloa Beach"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={batticaloa4}
                alt="Ceylon D Tour Batticaloa experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers culturally immersive Batticaloa tour packages with comfortable transportation, lagoon boat rides, and heritage site visits. Our services include beach excursions to Pasikuda and Kalkudah, cultural tour guidance, and accommodation assistance. With Ceylon D Tour, you can discover Batticaloa's unique eastern culture, scenic lagoon beauty, and historic landmarks with personalized service, local expertise, and authentic cultural experiences for a memorable eastern coast journey.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Batticaloa;
