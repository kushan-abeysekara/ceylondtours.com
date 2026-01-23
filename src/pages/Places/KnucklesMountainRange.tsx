import React, { useEffect } from 'react';
import './Sigiriya.css';
import knuckles1 from '../../img/webp/knuckles1.webp';
import knuckles2 from '../../img/webp/knuckles2.webp';
import knuckles3 from '../../img/webp/knuckles3.webp';
import knuckles4 from '../../img/webp/knuckles4.webp';

const KnucklesMountainRange: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={knuckles1} alt="Knuckles Mountain Range" />
        <div className="dest-badge">Knuckles Mountain Range</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={knuckles2}
                alt="Knuckles Mountain Range"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Knuckles Mountain Range?</h1>
              <p className="dest-description">
                The Knuckles Mountain Range is a UNESCO-listed conservation area known for its dramatic landscapes and rich biodiversity. Covered in mist and cloud forests, it offers stunning views and untouched natural beauty.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided trekking experiences
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Nature-focused travel plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Calm and refreshing environment
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Nature & Hiking</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                The Knuckles Mountain Range is a UNESCO World Heritage Site named for its resemblance to clenched knuckles. This biodiversity hotspot features dramatic peaks, cloud forests, grasslands, and endemic species of plants and animals. The region offers challenging trekking routes through pristine wilderness, remote villages, and stunning scenic viewpoints.
              </p>
              <p className="dest-bottom-text">
                Trekkers can experience diverse ecosystems, observe rare bird species, and enjoy encounters with local mountain communities. The cool climate, misty landscapes, and untouched natural beauty make the Knuckles Range a paradise for adventure enthusiasts, nature photographers, and eco-tourists seeking authentic wilderness experiences.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={knuckles3}
                alt="Knuckles Hiking"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={knuckles4}
                alt="Ceylon D Tour Knuckles experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides expert-guided Knuckles trekking packages with experienced mountain guides, comfortable transportation to trailheads, and camping or homestay arrangements. Our services include customized trekking routes based on fitness levels, safety equipment guidance, and village tourism experiences. With Ceylon D Tour, you can explore the Knuckles' pristine wilderness, endemic biodiversity, and mountain culture with reliable support, environmental responsibility, and personalized adventure planning.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default KnucklesMountainRange;
