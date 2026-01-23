import React, { useEffect } from 'react';
import './Sigiriya.css';
import hatton1 from '../../img/webp/hatton1.webp';
import hatton2 from '../../img/webp/hatton2.webp';
import hatton3 from '../../img/webp/hatton3.webp';
import hatton4 from '../../img/webp/hatton4.webp';

const Hatton: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={hatton1} alt="Hatton" />
        <div className="dest-badge">Hatton</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={hatton2}
                alt="Hatton Tea Estates"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Hatton?</h1>
              <p className="dest-description">
                Hatton is surrounded by lush tea estates and rolling hills, offering stunning landscapes. It serves as a main base for pilgrims visiting Adam's Peak.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Scenic hill-country travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided plantation visits
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxed experience
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
                Hatton is a charming hill-country town surrounded by sprawling tea estates, serving as the main gateway to Adam's Peak and a hub for Sri Lanka's tea industry. Located at 1,271 meters above sea level, Hatton offers cool temperatures, scenic mountain views, and opportunities to explore working tea plantations and factories where Ceylon tea is processed.
              </p>
              <p className="dest-bottom-text">
                The town's proximity to Adam's Peak makes it a popular base during pilgrimage season. Visitors can tour tea factories, walk through emerald-green tea fields, visit Castlereagh Reservoir, and experience the authentic hill-country lifestyle. Hatton's peaceful atmosphere and natural beauty make it perfect for tea tourism and mountain exploration.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={hatton3}
                alt="Hatton Tea Gardens"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={hatton4}
                alt="Ceylon D Tour Hatton experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers specialized Hatton tour packages with comfortable transportation through tea country, factory visits, and Adam's Peak pilgrimage coordination. Our services include guided plantation tours, accommodation arrangements, reservoir excursions, and flexible schedules for sunrise hikes. With Ceylon D Tour, you can experience Hatton's tea heritage, mountain scenery, and spiritual significance with expert guidance, personalized service, and seamless travel arrangements for an enriching highland journey.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Hatton;
