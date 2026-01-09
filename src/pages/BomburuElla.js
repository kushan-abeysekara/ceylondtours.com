import React from 'react';
import './Sigiriya.css';

const BomburuElla = () => {
  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1580549239615-367449433e06?w=1600" alt="Bomburu Ella" />
        <div className="dest-badge">Bomburu Ella</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src="https://images.unsplash.com/photo-1587895265520-f806d3b7e4bb?w=800" alt="Bomburu Ella waterfall" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Bomburu Ella</h1>
              <p className="dest-description">
                One of the widest waterfalls in Sri Lanka, surrounded by misty hills, forests, and natural beauty near Nuwara Eliya.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Safe and well-managed travel plans
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Flexible nature tour options
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Calm and seamless waterfall experience
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
                  <span>1 Days</span>
                </div>
                <div className="dest-meta-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Sightseeing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Bomburu Ella, meaning "Bee Waterfall" in Sinhala, is a stunning cascade located in the central highlands near Nuwara Eliya. At approximately 100 feet wide, it's one of Sri Lanka's widest waterfalls, creating a spectacular curtain of water that plunges down the rocky cliff face.
              </p>
              <p className="dest-bottom-text">
                The waterfall is particularly impressive during the monsoon season when the flow increases dramatically. The surrounding area offers excellent hiking trails through pine forests and tea plantations, with cool mountain air and misty landscapes creating a refreshing escape from tropical heat. The site is less crowded than other tourist attractions, providing a peaceful nature experience.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src="https://images.unsplash.com/photo-1580549239615-367449433e06?w=800" alt="Bomburu Ella landscape" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dest-cta">
        <div className="dest-cta-content">
          <div className="dest-cta-icon">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="25" fill="white" opacity="0.2"/>
              <path d="M30 15c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z" fill="white"/>
            </svg>
          </div>
          <h2 className="dest-cta-title">Don't Know Which Destination To Choose?</h2>
          <p className="dest-cta-phone">Call Us (858) 577-3477</p>
        </div>
      </section>
    </div>
  );
};

export default BomburuElla;
