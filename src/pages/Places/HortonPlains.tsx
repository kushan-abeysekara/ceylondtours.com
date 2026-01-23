import React, { useEffect } from 'react';
import './Sigiriya.css';
import horton1 from '../../img/webp/hortan1.webp';
import horton2 from '../../img/webp/hortan2.webp';
import horton3 from '../../img/webp/hortan3.webp';
import horton4 from '../../img/webp/hortan4.webp';
import DestinationSuggestions from '../../components/DestinationSuggestions';
import { getRandomSuggestions } from '../../data/destinationsData';

const HortonPlains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={horton1} alt="Horton Plains" />
        <div className="dest-badge">Horton Plains</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={horton2} alt="World's End" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Horton Plains</h1>
              <p className="dest-description">
                A protected nature reserve with cloud forests and dramatic cliffs.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Guided nature hikes
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Early-morning tours
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful surroundings
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
                    <path d="M5 10l7-7 7 7M5 18l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Nature & Hiking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Horton Plains National Park is a UNESCO World Heritage Site featuring unique montane cloud forests, grasslands, and dramatic cliff formations. The park's main attraction is World's End, a sheer precipice with a 880-meter drop offering breathtaking panoramic views. The area is rich in endemic flora and fauna.
              </p>
              <p className="dest-bottom-text">
                Early morning hikes through misty landscapes lead to World's End and Baker's Falls, a beautiful waterfall. The cool climate, diverse ecosystems, and stunning scenery make Horton Plains ideal for nature lovers, hikers, and wildlife photographers.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={horton3} alt="Horton Plains landscape" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={horton4} alt="Ceylon D Tour Horton Plains experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers organized Horton Plains trekking experiences with early morning departures, comfortable transportation through scenic hill country, and park entrance assistance. Our packages include experienced guides, hiking equipment recommendations, and combined tours with nearby attractions like tea estates. With Ceylon D Tour, you can explore Horton Plains' natural wonders safely and comfortably while enjoying personalized service and expert local knowledge.
              </p>
            </div>
          </div>
      {/* Destination Suggestions */}
      <DestinationSuggestions 
        currentDestination="HortonPlains"
        suggestions={getRandomSuggestions('/places/horton-plains', 4)}
      />

        </div>
      </section>

    
    </div>
  );
};

export default HortonPlains;

