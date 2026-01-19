import React, { useEffect } from 'react';
import './Sigiriya.css';

const Sigiriya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={require('../../img/sigiriya_head.webp')} alt="Sigiriya" />
        <div className="dest-badge">Sigiriya</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={require('../../img/sigiriya 1.webp')} alt="Sigiriya aerial view" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Sigiriya</h1>
              <p className="dest-description">
                An ancient rock fortress and UNESCO World Heritage Site, famous for its frescoes, lion-shaped gateway, and breathtaking views from the summit.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe and reliable travel arrangements
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Flexible sightseeing plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxed and smooth travel experience
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
                  <span>2 Days</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Sightseeing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Sigiriya, also known as the Lion Rock, is a world-famous ancient rock fortress built in the 5th century AD by King Kashyapa I and is recognized today as a UNESCO World Heritage Site. Rising nearly 200 meters above the surrounding plains, Sigiriya reflects exceptional ancient Sri Lankan engineering and urban planning through its landscaped water gardens, advanced irrigation systems, mirror wall inscriptions, and iconic frescoes depicting celestial maidens.
              </p>
              <p className="dest-bottom-text">
                Visitors can climb through the historic lion-shaped gateway to reach the summit, where the ruins of the royal palace and breathtaking panoramic views of forests, lakes, and nearby villages create an unforgettable experience. The site perfectly blends history, art, architecture, and natural beauty, making it one of Sri Lanka's most treasured cultural landmarks.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={require('../../img/sigiriya 2.webp')} alt="Sigiriya sunset" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={require('../../img/sigiriya 3.webp')} alt="Ceylon D Tour Sigiriya experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers carefully designed Sigiriya tour experiences that ensure safe, comfortable, and memorable travel for every visitor. Our services include reliable transportation, experienced drivers, knowledgeable guides, and flexible sightseeing plans tailored to your preferences. We also arrange sunrise or sunset visits, assistance with entrance tickets, and visits to nearby attractions such as Pidurangala Rock and cultural village tours. With a strong focus on personalized service and smooth travel arrangements, Ceylon D Tour allows you to explore Sigiriya at a relaxed pace while enjoying a truly enriching Sri Lankan travel experience.
              </p>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default Sigiriya;
