import React, { useEffect } from 'react';
import './Sigiriya.css';

const Hambantota: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600" alt="Hambantota" />
        <div className="dest-badge">Hambantota</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
                alt="Hambantota"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Hambantota?</h1>
              <p className="dest-description">
                Hambantota is known for its wide roads, parks, and nearby wildlife attractions. It represents modern development blended with nature.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Smooth travel routes
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
                Hambantota is known for its wide roads, parks, and nearby wildlife attractions. It represents modern development blended with nature.
              </p>
              <p className="dest-bottom-text">
                Visitors can explore national parks, beaches, and modern facilities.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800"
                alt="Hambantota Development"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hambantota;
