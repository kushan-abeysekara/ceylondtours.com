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
                Mahiyanganaya is one of Sri Lanka's oldest and most historically significant towns, closely associated with the island's ancient Buddhist heritage and indigenous Vedda community. The Mahiyangana Raja Maha Vihara temple is believed to have been visited by Lord Buddha himself, making it an important pilgrimage site with over 2,500 years of documented history.
              </p>
              <p className="dest-bottom-text">
                The town serves as a gateway to the Maduru Oya National Park and offers unique opportunities to learn about Vedda culture, Sri Lanka's aboriginal inhabitants. Visitors can explore ancient temples, archaeological sites, and experience traditional Vedda villages. Mahiyanganaya provides a fascinating journey into Sri Lanka's earliest civilizations and spiritual roots.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800"
                alt="Mahiyanganaya Culture"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
                alt="Ceylon D Tour Mahiyanganaya experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides culturally immersive Mahiyanganaya tour packages with knowledgeable guides, comfortable transportation, and respectful cultural experiences. Our services include ancient temple visits, Vedda cultural encounters, national park excursions, and historical site explorations. With Ceylon D Tour, you can discover Mahiyanganaya's ancient Buddhist heritage, indigenous culture, and historical significance with personalized service, cultural sensitivity, and expert local knowledge for an enlightening journey into Sri Lanka's earliest civilizations.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Mahiyanganaya;
