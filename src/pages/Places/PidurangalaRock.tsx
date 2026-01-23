import React, { useEffect } from 'react';
import './Sigiriya.css';
import pidurangala1 from '../../img/webp/pidurangala1.webp';
import pidurangala2 from '../../img/webp/pidurangala2.webp';
import pidurangala3 from '../../img/webp/pidurangala3.webp';
import pidurangala4 from '../../img/webp/pidurangala4.webp';

const PidurangalaRock: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={pidurangala1} alt="Pidurangala Rock" />
        <div className="dest-badge">Pidurangala Rock</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={pidurangala2}
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
                Pidurangala Rock is located just north of Sigiriya and offers a rewarding hiking experience with spectacular panoramic views of the famous Lion Rock. The climb involves traversing through an ancient temple, boulders, and natural rock formations, culminating in a flat summit with breathtaking 360-degree views of the surrounding landscapes.
              </p>
              <p className="dest-bottom-text">
                Sunrise and sunset from Pidurangala provide stunning photography opportunities and a less crowded alternative to Sigiriya. The ancient reclining Buddha statue at the temple adds cultural significance. Pidurangala is perfect for adventurous travelers seeking nature, history, and spectacular vistas in one unforgettable hike.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={pidurangala3}
                alt="Pidurangala View"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={pidurangala4}
                alt="Ceylon D Tour Pidurangala experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers guided Pidurangala Rock hiking tours with comfortable transportation, flexible timing for sunrise or sunset climbs, and safety-focused arrangements. Our packages include entrance coordination, hiking guidance, and combined tours with Sigiriya and nearby attractions. With Ceylon D Tour, you can experience Pidurangala's spectacular views, ancient temple, and adventurous climb with personalized service, local expertise, and seamless travel arrangements for a memorable hiking experience.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default PidurangalaRock;
