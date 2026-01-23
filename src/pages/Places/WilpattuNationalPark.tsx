import React, { useEffect } from 'react';
import './Sigiriya.css';
import wilpattu1 from '../../img/webp/wilapaththu1.webp';
import wilpattu2 from '../../img/webp/wilapaththu2.webp';
import wilpattu3 from '../../img/webp/wilapaththu3.webp';
import wilpattu4 from '../../img/webp/wilapaththu4.webp';
import DestinationSuggestions from '../../components/DestinationSuggestions';
import { getRandomSuggestions } from '../../data/destinationsData';

const WilpattuNationalPark: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={wilpattu1} alt="Wilpattu National Park" />
        <div className="dest-badge">Wilpattu National Park</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={wilpattu2}
                alt="Wilpattu Leopard"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Wilpattu National Park?</h1>
              <p className="dest-description">
                Wilpattu National Park is Sri Lanka's largest national park and is known for its unique natural lakes called "villus."
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Quiet safari experiences
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Professional wildlife guides
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
                <span>🎯 Wildlife Safari</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Wilpattu National Park is Sri Lanka's largest and oldest national park, famous for its unique natural sand-rimmed water basins called "villus." The park features dense forests, scrublands, and wetlands, providing diverse habitats for wildlife including leopards, elephants, sloth bears, and various bird species.
              </p>
              <p className="dest-bottom-text">
                Wilpattu offers a more remote and less crowded safari experience compared to other parks, making it ideal for wildlife enthusiasts seeking tranquility. The park's natural beauty, leopard sightings, and serene atmosphere create an authentic wilderness adventure away from tourist crowds.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={wilpattu3}
                alt="Wilpattu Wildlife"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={wilpattu4}
                alt="Ceylon D Tour Wilpattu experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour offers exclusive Wilpattu safari packages with experienced wildlife trackers, comfortable jeep arrangements, and flexible safari timings. Our services include park entrance assistance, accommodation recommendations near the reserve, and combined tours with nearby attractions. With Ceylon D Tour, you can explore Wilpattu's pristine wilderness, spot elusive leopards, and enjoy peaceful safari experiences with expert guidance and trusted travel support for an authentic nature encounter.
              </p>
            </div>
          </div>
      {/* Destination Suggestions */}
      <DestinationSuggestions 
        currentDestination="WilpattuNationalPark"
        suggestions={getRandomSuggestions('/places/wilpattu-national-park', 4)}
      />

        </div>
      </section>

    
    </div>
  );
};

export default WilpattuNationalPark;

