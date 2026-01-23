import React, { useEffect } from 'react';
import './Sigiriya.css';
import polonnaruwa1 from '../../img/webp/polonnaruwa1.webp';
import polonnaruwa2 from '../../img/webp/polonnaruwa2.webp';
import polonnaruwa3 from '../../img/webp/polonnaruwa3.webp';
import polonnaruwa4 from '../../img/webp/polonnaruwa4.webp';
const Polonnaruwa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={polonnaruwa1} alt="Polonnaruwa" />
        <div className="dest-badge">Polonnaruwa</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={polonnaruwa2} alt="Polonnaruwa ruins" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Polonnaruwa</h1>
              <p className="dest-description">
                A well-preserved medieval capital with impressive ruins.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Historical exploration
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cycling-friendly routes
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxed travel
                </li>
              </ul>

              <div className="dest-meta">
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Land Trip</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>1 Day</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Cultural Tour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Polonnaruwa is Sri Lanka's second ancient capital and a UNESCO World Heritage Site, showcasing well-preserved medieval ruins from the 11th and 12th centuries. The compact archaeological park features magnificent royal palaces, stone sculptures, Buddhist temples, and the famous Gal Vihara rock-carved Buddha statues.
              </p>
              <p className="dest-bottom-text">
                Exploring Polonnaruwa by bicycle or foot offers an intimate view of Sri Lanka's medieval history and architecture. The site beautifully combines religious significance, artistic achievement, and historical importance, making it a must-visit cultural destination.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={polonnaruwa3} alt="Polonnaruwa statues" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={polonnaruwa4} alt="Ceylon D Tour Polonnaruwa experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers expertly guided Polonnaruwa heritage tours with comfortable transportation, bicycle rental arrangements, and knowledgeable guides who bring history to life. Our packages include visits to all major archaeological sites, detailed historical explanations, and flexible schedules. We also arrange combined tours with nearby attractions. With Ceylon D Tour, you can explore Polonnaruwa's medieval wonders with personalized service, cultural sensitivity, and seamless travel arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Polonnaruwa;
