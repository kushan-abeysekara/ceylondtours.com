import React, { useEffect } from 'react';
import './Sigiriya.css';
import bentota1 from '../../img/webp/bentota1.webp';
import bentota2 from '../../img/webp/bentota2.webp';
import bentota3 from '../../img/webp/bentota3.webp';
import bentota4 from '../../img/webp/bentota4.webp';
import DestinationSuggestions from '../../components/DestinationSuggestions';
import { getRandomSuggestions } from '../../data/destinationsData';

const Bentota = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={bentota1} alt="Bentota" />
        <div className="dest-badge">Bentota</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={bentota2} alt="Bentota beach" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Bentota</h1>
              <p className="dest-description">
                A popular beach destination offering water sports and river safaris.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Beachside relaxation
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Adventure activities
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe and smooth travel
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
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span>Beach & Adventure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Bentota is a premier beach destination on Sri Lanka's southwest coast, renowned for its golden sandy beaches, calm waters, and exciting water sports. The town features long stretches of pristine coastline perfect for swimming, surfing, jet skiing, and banana boat rides, making it ideal for both relaxation and adventure.
              </p>
              <p className="dest-bottom-text">
                The scenic Bentota River offers mangrove boat safaris, turtle hatchery visits, and opportunities to experience traditional village life. With luxury resorts, water activities, and natural beauty, Bentota provides a perfect blend of leisure and excitement for families and couples.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={bentota3}  alt="Bentota river" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={bentota4} alt="Ceylon D Tour Bentota experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers customized Bentota beach packages with reliable transportation, water sports arrangements, and river safari bookings. Our services include hotel assistance, turtle hatchery visits, Ayurvedic spa tours, and flexible beach activity schedules. With Ceylon D Tour, you can experience Bentota's coastal beauty, adventure activities, and relaxation opportunities with personalized attention and trusted travel support for an unforgettable beach holiday.
              </p>
            </div>
          </div>
      {/* Destination Suggestions */}
      <DestinationSuggestions 
        currentDestination="Bentota"
        suggestions={getRandomSuggestions('/places/bentota', 4)}
      />

        </div>
      </section>

    
    </div>
  );
};

export default Bentota;

