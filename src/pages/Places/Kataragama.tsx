import React, { useEffect } from 'react';
import './Sigiriya.css';
import kataragama1 from '../../img/Kataragama1.webp';
import DestinationSuggestions from '../../components/DestinationSuggestions';
import { getRandomSuggestions } from '../../data/destinationsData';
import kataragama2 from '../../img/kataragama2.webp';
import kataragama3 from '../../img/kataragama3.webp';
import kataragama4 from '../../img/kataragama4.webp';

const Kataragama: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={kataragama1} alt="Kataragama" />
        <div className="dest-badge">Kataragama</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={kataragama2}
                alt="Kataragama Temple"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Kataragama?</h1>
              <p className="dest-description">
                Kataragama is one of Sri Lanka's most important religious sites, visited by Buddhists, Hindus, Muslims, and Christians.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Organized pilgrimage travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful spiritual atmosphere
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable arrangements
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 Pilgrimage</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Kataragama is one of Sri Lanka's most sacred multi-religious pilgrimage sites, revered by Buddhists, Hindus, Muslims, and indigenous Vedda people. The temple complex is dedicated to God Kataragama (Skanda) and attracts thousands of devotees throughout the year, especially during the annual Esala Festival featuring elaborate rituals and ceremonies.
              </p>
              <p className="dest-bottom-text">
                The town offers a unique spiritual atmosphere with daily pujas, religious processions, and traditional customs. Visitors can explore the main shrine, Buddhist temples, mosques, and the sacred Menik Ganga river. Kataragama provides a profound spiritual experience reflecting Sri Lanka's religious diversity and cultural harmony.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={kataragama3}
                alt="Kataragama Rituals"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={kataragama4}
                alt="Ceylon D Tour Kataragama experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides respectful Kataragama pilgrimage packages with comfortable transportation, knowledgeable guides familiar with religious customs, and flexible visiting schedules. Our services include temple visit arrangements, cultural sensitivity guidance, and accommodation assistance near the sacred complex. With Ceylon D Tour, you can experience Kataragama's spiritual significance, religious rituals, and cultural depth with personalized service and appropriate respect for all traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Suggestions */}
      <DestinationSuggestions 
        currentDestination="Kataragama"
        suggestions={getRandomSuggestions('/places/kataragama', 4)}
      />
    
    </div>
  );
};

export default Kataragama;
