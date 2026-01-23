import React, { useEffect } from 'react';
import './Sigiriya.css';
import yala1 from '../../img/webp/yala1.webp';
import yala2 from '../../img/webp/yala2.webp';
import yala3 from '../../img/webp/yala3.webp';
import yala4 from '../../img/webp/yala4.webp';

const YalaNationalPark = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src={yala1} alt="Yala National Park" />
        <div className="dest-badge">Yala National Park</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src={yala2} alt="Yala wildlife" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Yala National Park</h1>
              <p className="dest-description">
                Sri Lanka's most popular wildlife reserve, famous for leopard sightings.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe jeep safaris
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Experienced wildlife guides
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Flexible safari times
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
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Wildlife Safari</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Yala National Park is Sri Lanka's most visited wildlife reserve and home to one of the highest leopard densities in the world. The park features diverse ecosystems including forests, grasslands, lagoons, and coastal areas, hosting elephants, sloth bears, crocodiles, spotted deer, and over 200 bird species.
              </p>
              <p className="dest-bottom-text">
                Safari tours through Yala offer thrilling wildlife encounters and stunning natural scenery. Whether you're a wildlife enthusiast, photographer, or nature lover, Yala provides unforgettable experiences and opportunities to witness Sri Lanka's incredible biodiversity.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src={yala3} alt="Yala safari" />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img src={yala4} alt="Ceylon D Tour Yala experience" />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour provides expert-led Yala safari experiences with reliable transportation, experienced wildlife guides, and comfortable jeep arrangements. Our packages include morning and evening safari options, park entrance assistance, and accommodation bookings near the reserve. We ensure safe, informative, and exciting wildlife adventures tailored to your interests. With Ceylon D Tour, you can explore Yala's natural wonders with personalized service and trusted travel support.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default YalaNationalPark;
