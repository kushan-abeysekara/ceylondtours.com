import React, { useEffect } from 'react';
import './Sigiriya.css';
import adamspeak1 from '../../img/webp/adamspeak1.webp';
import adamspeak2 from '../../img/webp/adamspeak2.webp';
import adamspeak3 from '../../img/webp/adamspeak3.webp';
import adamspeak4 from '../../img/webp/adamspeak4.webp';
import DestinationSuggestions from '../../components/DestinationSuggestions';
import { getRandomSuggestions } from '../../data/destinationsData';

const AdamsPeak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={adamspeak1} alt="Adam's Peak" />
        <div className="dest-badge">Adam's Peak</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={adamspeak2} alt="Adam's Peak summit" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Adam's Peak</h1>
              <p className="dest-description">
                A sacred mountain famous for its religious significance and sunrise views.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Organized pilgrim travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe hiking routes
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable rest stops
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
                    <path d="M5 10l7-7 7 7M5 18l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Pilgrimage & Hiking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Adam's Peak (Sri Pada) is a sacred mountain standing at 2,243 meters, revered by Buddhists, Hindus, Christians, and Muslims alike. The summit features a footprint-shaped rock formation believed to be that of Lord Buddha, Lord Shiva, or Adam, depending on religious interpretation. The pilgrimage season runs from December to May.
              </p>
              <p className="dest-bottom-text">
                Thousands of pilgrims and hikers climb the 5,500 steps during nighttime to witness the spectacular sunrise from the summit. The spiritual atmosphere, breathtaking views, and sense of accomplishment make Adam's Peak an unforgettable experience combining physical challenge with spiritual enlightenment.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={adamspeak3} alt="Adam's Peak sunrise" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={adamspeak4} alt="Ceylon D Tour Adam's Peak experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides organized Adam's Peak pilgrimage packages with comfortable transportation to the base, accommodation arrangements, and guidance on optimal climbing times. Our services include local expert advice, rest stop information, and safety recommendations. With Ceylon D Tour, you can experience this sacred climb with proper preparation, flexible timing, and trusted support, ensuring a meaningful and memorable pilgrimage journey.
              </p>
            </div>
          </div>
      {/* Destination Suggestions */}
      <DestinationSuggestions 
        currentDestination="AdamsPeak"
        suggestions={getRandomSuggestions('/places/adams-peak', 4)}
      />

        </div>
      </section>

    
    </div>
  );
};

export default AdamsPeak;

