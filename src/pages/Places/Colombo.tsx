import React, { useEffect } from 'react';
import './Sigiriya.css';
import colombo1 from '../../img/colombo1.webp';
import colombo2 from '../../img/colombo2.webp';
import colombo3 from '../../img/colombo3.webp';
import colombo4 from '../../img/colombo4.webp';

const Colombo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src={colombo1} alt="Colombo" />
        <div className="dest-badge">Colombo</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src={colombo3}
                alt="Colombo City"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Colombo?</h1>
              <p className="dest-description">
                Colombo is a vibrant city featuring modern skyscrapers, shopping malls, and historic buildings. It reflects Sri Lanka's economic and cultural diversity.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Comfortable city travel
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Flexible sightseeing plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Smooth urban experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 2 Days</span>
                <span>🎯 City Tour</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Colombo is Sri Lanka's bustling commercial capital and largest city, blending modern skyscrapers with colonial-era buildings, vibrant markets, and coastal promenades. As the country's economic and cultural hub, Colombo offers diverse experiences ranging from shopping malls and fine dining to historic temples, museums, and beach walks along Galle Face Green.
              </p>
              <p className="dest-bottom-text">
                Visitors can explore cultural landmarks such as Gangaramaya Temple, the National Museum, Pettah Market, and Independence Square. With its mix of tradition and modernity, Colombo serves as an exciting introduction to Sri Lanka's urban lifestyle and multicultural heritage.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src={colombo2}
                alt="Colombo Skyline"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src={colombo4}
                alt="Ceylon D Tour Colombo experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides well-organized Colombo city tours with comfortable transportation, flexible itineraries, and knowledgeable local guides. Our packages include visits to key landmarks, shopping districts, cultural sites, and coastal attractions. We also arrange airport transfers, hotel assistance, and combined city-heritage tours. With Ceylon D Tour, you can experience Colombo's vibrant urban culture and historical charm in a safe, convenient, and personalized manner.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Colombo;
