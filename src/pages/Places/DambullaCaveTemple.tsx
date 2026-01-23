import React, { useEffect } from 'react';
import './Sigiriya.css';
import dambulla1 from '../../img/webp/dambulla1.webp';
import dambulla2 from '../../img/webp/dambulla2.webp';
import dambulla3 from '../../img/webp/dambulla3.webp';
import dambulla4 from '../../img/webp/dambulla4.webp';

const DambullaCaveTemple = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={dambulla1} alt="Dambulla Cave Temple" />
        <div className="dest-badge">Dambulla Cave Temple</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={dambulla2} alt="Dambulla temple interior" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Dambulla Cave Temple</h1>
              <p className="dest-description">
                A sacred cave temple complex with ancient murals and statues.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cultural exploration
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided visits
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe travel
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
                Dambulla Cave Temple, also known as the Golden Temple, is a UNESCO World Heritage Site featuring five cave shrines containing over 150 Buddha statues and 2,100 square meters of exquisite murals. Dating back to the 1st century BC, this sacred complex represents centuries of Buddhist art and devotion.
              </p>
              <p className="dest-bottom-text">
                The caves showcase remarkable preservation of ancient wall paintings and sculptures depicting Buddha's life and Sri Lankan history. Climbing to the temple rewards visitors with stunning views and a profound spiritual experience, making Dambulla one of Sri Lanka's most important cultural and religious sites.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={dambulla3} alt="Dambulla cave" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={dambulla4} alt="Ceylon D Tour Dambulla experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers expertly guided Dambulla Cave Temple tours with comfortable transportation, knowledgeable cultural guides, and flexible visiting schedules. Our services include entrance assistance, historical explanations, and combined tours with nearby attractions like Sigiriya and Minneriya. With Ceylon D Tour, you can explore this ancient Buddhist sanctuary with cultural sensitivity, detailed insights, and personalized service for a deeply enriching spiritual and historical experience.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default DambullaCaveTemple;
