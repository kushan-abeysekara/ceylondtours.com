import React, { useEffect } from 'react';
import './Sigiriya.css';
import mirissa1 from '../../img/webp/mirissabeach1.webp';
import mirissa2 from '../../img/webp/mirissabeach2.webp';
import mirissa3 from '../../img/webp/mirissabeach3.webp';
import mirissa4 from '../../img/webp/mirissabeach4.webp';


const Mirissa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={mirissa1} alt="Mirissa" />
        <div className="dest-badge">Mirissa</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={mirissa2} alt="Mirissa beach" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Mirissa</h1>
              <p className="dest-description">
                A tropical beach paradise famous for whale watching and golden beaches.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable beach travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Flexible leisure plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxed seaside experience
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
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Beach & Leisure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Mirissa is a picturesque coastal town on Sri Lanka's southern coast, famous for its golden sandy beaches, turquoise waters, and world-class whale watching opportunities. From November to April, visitors can witness majestic blue whales and playful dolphins in their natural habitat, making Mirissa one of the best marine wildlife destinations in Asia.
              </p>
              <p className="dest-bottom-text">
                Beyond whale watching, Mirissa offers excellent surfing spots, beachside cafes, fresh seafood, and stunning sunsets. The laid-back atmosphere and natural beauty make it an ideal destination for relaxation, water sports, and coastal adventures.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={mirissa3} alt="Mirissa sunset" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={mirissa4} alt="Ceylon D Tour Mirissa experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers exciting Mirissa travel experiences with reliable transportation, whale watching tour arrangements, and accommodation assistance. Our packages include beach excursions, visits to nearby attractions such as Coconut Tree Hill and Secret Beach, and flexible schedules tailored to your preferences. With Ceylon D Tour, you can enjoy Mirissa's coastal charm, marine wildlife encounters, and tropical beauty with trusted service and personalized travel arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Mirissa;
