import React, { useEffect } from 'react';
import './Sigiriya.css';

const SinharajaForest: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1511497584788-876760111969?w=1600" alt="Sinharaja Forest" />
        <div className="dest-badge">Sinharaja Forest</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?w=800"
                alt="Sinharaja Forest"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Sinharaja Forest?</h1>
              <p className="dest-description">
                Sinharaja Forest Reserve is Sri Lanka's last remaining primary rainforest and is home to many endemic plant and animal species.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Eco-friendly travel plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided nature walks
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Calm and natural environment
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Eco Tourism</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Sinharaja Forest Reserve is Sri Lanka's last remaining primary tropical rainforest and a UNESCO World Heritage Site, renowned for its exceptional biodiversity. The reserve is home to numerous endemic species of birds, mammals, reptiles, amphibians, and plants, making it a paradise for nature researchers and wildlife enthusiasts.
              </p>
              <p className="dest-bottom-text">
                Guided treks through dense forest trails offer opportunities to observe rare purple-faced langurs, endemic bird species, colorful butterflies, and unique flora. The pristine ecosystem, mist-covered canopy, and natural soundscape create an immersive rainforest experience perfect for eco-tourism and conservation appreciation.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800"
                alt="Sinharaja Biodiversity"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?w=800"
                alt="Ceylon D Tour Sinharaja experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers eco-friendly Sinharaja rainforest tours with experienced naturalist guides, comfortable transportation, and sustainable tourism practices. Our packages include guided jungle treks, bird watching excursions, entrance arrangements, and accommodation bookings near the reserve. With Ceylon D Tour, you can explore Sinharaja's unique biodiversity, endemic species, and pristine ecosystems with expert guidance, environmental responsibility, and personalized service for an unforgettable nature experience.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default SinharajaForest;
