import React, { useEffect } from 'react';
import './Sigiriya.css';
import matara1 from '../../img/webp/matara1.webp';
import matara2 from '../../img/webp/matara2.webp';
import matara3 from '../../img/webp/matara3.webp';
import matara4 from '../../img/webp/matara4.webp';
import DestinationSuggestions from '../../components/DestinationSuggestions';
import { getRandomSuggestions } from '../../data/destinationsData';

const Matara: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={matara1} alt="Matara" />
        <div className="dest-badge">Matara</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={matara2}
                alt="Matara Coast"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Matara?</h1>
              <p className="dest-description">
                Matara is a historic city located along the southern coast of Sri Lanka. It features colonial buildings, temples, and scenic beaches.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Coastal sightseeing
                </li>
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
                  Comfortable travel
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
                Matara is a historic southern coastal city known for its colonial Dutch fort, beautiful beaches, and religious landmarks. The city features Matara Fort, Paravi Duwa Temple on a small island, and Star Fort, showcasing centuries of cultural and architectural heritage.
              </p>
              <p className="dest-bottom-text">
                Visitors can explore pristine beaches like Polhena and Madiha, enjoy water sports, visit local markets, and experience authentic southern Sri Lankan culture. Matara offers a perfect combination of history, spirituality, and coastal relaxation.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={matara3}
                alt="Matara Beach"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={matara4}
                alt="Ceylon D Tour Matara experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides comprehensive Matara travel packages with reliable transportation, heritage site tours, and beach excursions. Our services include fort visits, temple explorations, coastal sightseeing, and local cuisine experiences. With Ceylon D Tour, you can discover Matara's colonial history, religious sites, and beautiful beaches with flexible itineraries, accommodation assistance, and personalized service for an authentic southern coastal experience.
              </p>
            </div>
          </div>
      {/* Destination Suggestions */}
      <DestinationSuggestions 
        currentDestination="Matara"
        suggestions={getRandomSuggestions('/places/matara', 4)}
      />

        </div>
      </section>

    
    </div>
  );
};

export default Matara;

