import React, { useEffect } from 'react';
import './Sigiriya.css';

const KnucklesMountainRange: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600" alt="Knuckles Mountain Range" />
        <div className="dest-badge">Knuckles Mountain Range</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
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
                The Knuckles Mountain Range is a UNESCO-listed conservation area known for its dramatic landscapes and rich biodiversity. Covered in mist and cloud forests, it offers stunning views and untouched natural beauty.
              </p>
              <p className="dest-bottom-text">
                The area is ideal for trekking, bird watching, and nature exploration. Its peaceful atmosphere and challenging trails make it a perfect destination for adventure seekers and nature lovers.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
                alt="Knuckles Hiking"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnucklesMountainRange;
