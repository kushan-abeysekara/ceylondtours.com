import React, { useEffect } from 'react';
import './Sigiriya.css';
import anuradhapura1 from '../../img/webp/anuradhapura1.webp';
import anuradhapura2 from '../../img/webp/anuradhapura2.webp';
import anuradhapura3 from '../../img/webp/anuradhapura3.webp';
import anuradhapura4 from '../../img/webp/anuradhapura4.webp';
import DestinationSuggestions from '../../components/DestinationSuggestions';
import { getRandomSuggestions } from '../../data/destinationsData';

const Anuradhapura = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={anuradhapura1} alt="Anuradhapura" />
        <div className="dest-badge">Anuradhapura</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={anuradhapura2} alt="Anuradhapura stupa" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Anuradhapura</h1>
              <p className="dest-description">
                An ancient sacred city and UNESCO World Heritage Site.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cultural heritage tours
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided sightseeing
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable travel
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
                Anuradhapura is one of Sri Lanka's ancient capitals and a UNESCO World Heritage Site, dating back over 2,500 years. The city served as the center of Theravada Buddhism and features massive stupas, sacred Bodhi trees, ancient monasteries, and advanced irrigation systems that showcase remarkable ancient engineering.
              </p>
              <p className="dest-bottom-text">
                Key attractions include the Sri Maha Bodhi tree, Ruwanwelisaya stupa, Jetavanaramaya, and Abhayagiri monastery. Walking through these ancient ruins offers a deeply spiritual and historical experience, reflecting Sri Lanka's rich Buddhist heritage and architectural brilliance.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={anuradhapura3} alt="Anuradhapura ruins" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={anuradhapura4} alt="Ceylon D Tour Anuradhapura experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers comprehensive Anuradhapura heritage tours with knowledgeable guides, comfortable transportation, and respectful cultural experiences. Our packages include visits to all major sacred sites, historical monuments, and ancient ruins with detailed explanations of their significance. We provide flexible itineraries, entrance assistance, and combined cultural tours. With Ceylon D Tour, you can explore Anuradhapura's spiritual depth and historical grandeur with trusted service and personalized attention.
              </p>
            </div>
          </div>
      {/* Destination Suggestions */}
      <DestinationSuggestions 
        currentDestination="Anuradhapura"
        suggestions={getRandomSuggestions('/places/anuradhapura', 4)}
      />

        </div>
      </section>

    
    </div>
  );
};

export default Anuradhapura;

