import React, { useEffect } from 'react';
import './Sigiriya.css';

const Kalpitiya: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600" alt="Kalpitiya" />
        <div className="dest-badge">Kalpitiya</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800"
                alt="Kalpitiya Coast"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Kalpitiya?</h1>
              <p className="dest-description">
                Kalpitiya is a hidden gem located along Sri Lanka's northwestern coast, surrounded by lagoons and pristine beaches. It is one of the best locations in the country to witness large pods of dolphins in their natural environment.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Eco-friendly travel options
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Adventure-based activities
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxed and nature-focused experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Beach & Adventure</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Kalpitiya is a hidden gem located along Sri Lanka's northwestern coast, surrounded by lagoons and pristine beaches. It is one of the best locations in the country to witness large pods of dolphins in their natural environment.
              </p>
              <p className="dest-bottom-text">
                The area is also internationally recognized for kite surfing due to its strong winds and wide lagoons. Kalpitiya is perfect for travelers seeking adventure, eco-tourism, and peaceful surroundings.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=800"
                alt="Kalpitiya Dolphins"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kalpitiya;
