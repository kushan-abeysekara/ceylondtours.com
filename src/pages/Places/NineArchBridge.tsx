import React, { useEffect } from 'react';
import './Sigiriya.css';

const NineArchBridge = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={require('../../img/webp/ella1.webp')} alt="Nine Arch Bridge" />
        <div className="dest-badge">Nine Arch Bridge</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={require('../../img/nine arch 2.webp')} alt="Nine Arch Bridge view" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Nine Arch Bridge</h1>
              <p className="dest-description">
                A famous railway bridge surrounded by lush green hills and tea plantations. One of the most photogenic places in Sri Lanka, offering stunning panoramic views.
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
                  Flexible sightseeing plans around Ella
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
                The Nine Arch Bridge, also known as the "Bridge in the Sky," is one of Sri Lanka's most iconic railway landmarks, located in the scenic hill town of Ella. Built during the British colonial period in the early 20th century, the bridge is an impressive example of colonial-era engineering, constructed entirely of stone, brick, and cement without the use of steel.
              </p>
              <p className="dest-bottom-text">
                Surrounded by lush green tea plantations and misty mountain landscapes, the bridge spans a deep valley and offers breathtaking views, especially when a train passes across it. Today, the Nine Arch Bridge is a must-visit destination for photographers, nature lovers, and travelers seeking a peaceful yet unforgettable hill-country experience.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={require('../../img/nine arch 1.webp')} alt="Nine Arch Bridge sunset" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={require('../../img/ninr arch 3.webp')} alt="Ceylon D Tour Nine Arch Bridge experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers well-organized tours to the Nine Arch Bridge, ensuring a comfortable and enjoyable journey through Sri Lanka's beautiful hill country. Our packages include reliable transportation, flexible sightseeing schedules, and guidance on the best times to visit for train sightings and photography. We also arrange visits to nearby attractions such as Ella Rock, Little Adam's Peak, and tea plantations to enhance your travel experience. With personalized service, trusted travel arrangements, and local expertise, Ceylon D Tour guarantees a smooth and memorable visit to the Nine Arch Bridge and the surrounding Ella region.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default NineArchBridge;
