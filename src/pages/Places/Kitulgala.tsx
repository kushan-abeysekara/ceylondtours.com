import React, { useEffect } from 'react';
import './Sigiriya.css';

const Kitulgala: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600" alt="Kitulgala" />
        <div className="dest-badge">Kitulgala</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
                alt="Kitulgala River"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Kitulgala?</h1>
              <p className="dest-description">
                Kitulgala is located near the Kelani River and is best known for white-water rafting and outdoor adventures. Surrounded by lush rainforests, it offers thrilling experiences in a natural setting.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe adventure activities
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Professional guides
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Exciting and smooth travel experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Adventure & Nature</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Kitulgala is located near the Kelani River and is best known for white-water rafting and outdoor adventures. Surrounded by lush rainforests, it offers thrilling experiences in a natural setting.
              </p>
              <p className="dest-bottom-text">
                Apart from rafting, visitors can enjoy jungle trekking, bird watching, and exploring caves. Kitulgala is ideal for travelers looking for excitement and nature combined.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
                alt="Kitulgala Adventure"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kitulgala;
