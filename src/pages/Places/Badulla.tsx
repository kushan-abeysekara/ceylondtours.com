import React, { useEffect } from 'react';
import './Sigiriya.css';
import badulla1 from '../../img/webp/ella1.webp';
import badulla2 from '../../img/webp/badulla2.webp';
import badulla3 from '../../img/webp/badulla3.webp';
import badulla4 from '../../img/webp/badulla4.webp';
import DestinationSuggestions from '../../components/DestinationSuggestions';
import { getRandomSuggestions } from '../../data/destinationsData';

const Badulla: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={badulla1} alt="Badulla" />
        <div className="dest-badge">Badulla</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={badulla2}
                alt="Badulla Hills"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Badulla?</h1>
              <p className="dest-description">
                Badulla is located in the Uva Province and is known for its cool climate and natural beauty. The area is surrounded by mountains, tea plantations, and waterfalls.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable hill travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Nature-focused sightseeing
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Sightseeing</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Badulla is the capital of Uva Province, nestled in Sri Lanka's highlands and surrounded by lush tea estates, waterfalls, and misty mountains. The town serves as the eastern terminus of the scenic Colombo-Badulla railway line, one of the most beautiful train journeys in the world. The cool climate and natural landscapes make it an ideal hill-country destination.
              </p>
              <p className="dest-bottom-text">
                Key attractions include Dunhinda Falls, Muthiyangana Raja Maha Vihara temple, Dowa Rock Temple, and surrounding tea plantations. Badulla offers a peaceful environment for nature walks, temple visits, and experiencing authentic upcountry Sri Lankan life away from crowded tourist areas.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={badulla3}
                alt="Badulla Nature"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={badulla4}
                alt="Ceylon D Tour Badulla experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides comprehensive Badulla tour packages with comfortable transportation through scenic highland routes, waterfall visits, and temple tours. Our services include tea plantation excursions, railway journey coordination, and accommodation assistance. With Ceylon D Tour, you can discover Badulla's natural beauty, cultural sites, and highland charm with flexible itineraries, local expertise, and personalized service for an authentic upcountry exploration experience.
              </p>
            </div>
          </div>
      {/* Destination Suggestions */}
      <DestinationSuggestions 
        currentDestination="Badulla"
        suggestions={getRandomSuggestions('/places/badulla', 4)}
      />

        </div>
      </section>

    
    </div>
  );
};

export default Badulla;

