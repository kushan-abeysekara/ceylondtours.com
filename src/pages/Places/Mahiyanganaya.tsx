import React, { useEffect } from 'react';
import './Sigiriya.css';

const Mahiyanganaya: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1600" alt="Mahiyanganaya" />
        <div className="dest-badge">Mahiyanganaya</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
                alt="Mahiyanganaya Temple"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Mahiyanganaya?</h1>
              <p className="dest-description">
                Mahiyanganaya is considered one of the oldest settlements in Sri Lanka and holds deep historical and religious importance. It is closely associated with the island's indigenous Vedda community.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cultural heritage exploration
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided historical visits
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Smooth travel experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Cultural Tour</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Mahiyanganaya is considered one of the oldest settlements in Sri Lanka and holds deep historical and religious importance. It is closely associated with the island's indigenous Vedda community.
              </p>
              <p className="dest-bottom-text">
                Visitors can explore ancient temples, cultural sites, and learn about early Sri Lankan civilization. The area offers a unique blend of history, culture, and tradition.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800"
                alt="Mahiyanganaya Culture"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mahiyanganaya;
