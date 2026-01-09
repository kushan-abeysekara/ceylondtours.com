import React from 'react';
import './Sigiriya.css';

const TempleOfTooth = () => {
  return (
    <div className="destination-page">
      {/* Hero Section */}
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600" alt="Temple of the Tooth Relic" />
        <div className="dest-badge">Temple of the Tooth Relic</div>
      </section>

      {/* Main Content Section */}
      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img src="https://images.unsplash.com/photo-1588971550723-4c4ae923cdbb?w=800" alt="Temple interior" />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Discover Temple of the Tooth Relic</h1>
              <p className="dest-description">
                A sacred temple in Kandy that houses a relic of the tooth of Lord Buddha. It is one of the most important religious and cultural sites in Sri Lanka.
              </p>
              
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Trusted and secure travel arrangements
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Personalized cultural and religious tour options
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Peaceful, well-organized temple visit experience
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
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Cultural</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                The Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) is located in the royal palace complex of Kandy, the last capital of the Sinhala kings. The temple has played an important role in Sri Lankan politics and culture since its construction in the 16th century.
              </p>
              <p className="dest-bottom-text">
                The temple holds daily rituals where devotees can observe the sacred casket containing the tooth relic. The annual Esala Perahera festival featuring a grand procession with decorated elephants is one of Asia's most spectacular cultural events. Visitors should dress modestly and be prepared for security checks.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" alt="Temple architecture" />
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

export default TempleOfTooth;
