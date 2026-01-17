import React, { useEffect } from 'react';
import './Sigiriya.css';

const Hatton: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1563968743333-044cef800494?w=1600" alt="Hatton" />
        <div className="dest-badge">Hatton</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1563968743333-044cef800494?w=800"
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
                Hatton is surrounded by lush tea estates and rolling hills, offering stunning landscapes. It serves as a main base for pilgrims visiting Adam's Peak.
              </p>
              <p className="dest-bottom-text">
                Visitors can enjoy tea plantation views, cool weather, and peaceful surroundings.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1587897773780-fe72528d6e52?w=800"
                alt="Hatton Tea Gardens"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hatton;
