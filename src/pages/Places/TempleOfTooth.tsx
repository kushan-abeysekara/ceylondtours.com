import React, { useEffect } from 'react';
import './Sigiriya.css';

const TempleOfTooth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={require('../../img/Temple of the tooth 1.webp')} alt="Temple of the Tooth Relic" />
        <div className="dest-badge">Temple of the Tooth Relic</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={require('../../img/Temple of the Sacred Tooth 2.webp')} alt="Temple interior" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Temple of the Tooth Relic</h1>
              <p className="dest-description">
                A sacred temple in Kandy that houses a relic of the tooth of Lord Buddha. It is one of the most important religious and cultural sites in Sri Lanka.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Trusted and secure travel arrangements
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Personalized cultural and religious tour options
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful, well-organized temple visit experience
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
                  <span>1 Days</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Cultural</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) is one of the most important religious and cultural landmarks in Sri Lanka, located in the heart of Kandy. The temple houses the sacred tooth relic of Lord Buddha, which has been revered for centuries and symbolizes spiritual authority and cultural heritage. Built within the former royal palace complex of the Kandyan Kingdom, the temple showcases exquisite Kandyan architecture, detailed wood carvings, golden roofs, and sacred shrines.
              </p>
              <p className="dest-bottom-text">
                Daily rituals, known as Thevava, attract devotees and visitors from around the world, while the annual Esala Perahera procession stands as one of Asia's grandest cultural festivals, reflecting deep-rooted traditions and devotion.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={require('../../img/temple of the tooth 3.webp')} alt="Temple architecture" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={require('../../img/temple of the tooth.webp')} alt="Ceylon D Tour Temple of Tooth experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers thoughtfully planned visits to the Temple of the Tooth Relic, ensuring a respectful, comfortable, and enriching experience for every traveler. Our tour services include reliable transportation, knowledgeable guides who explain the temple's history and customs, and flexible schedules to experience morning or evening rituals. We also arrange combined tours with Kandy city highlights such as Kandy Lake, cultural dance shows, and nearby viewpoints. With personalized service, attention to cultural sensitivity, and trusted travel arrangements, Ceylon D Tour allows you to explore this sacred site with ease while gaining a deeper understanding of Sri Lanka's spiritual heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default TempleOfTooth;
