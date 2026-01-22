import React, { useEffect } from 'react';
import './Sigiriya.css';

const RavanaFalls: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="destination-page">
      <section className="dest-hero">
        <img src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1600" alt="Ravana Falls" />
        <div className="dest-badge">Ravana Falls</div>
      </section>

      <section className="dest-content">
        <div className="dest-container">
          <div className="dest-main-section">
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800"
                alt="Ravana Falls"
              />
            </div>
            <div className="dest-right">
              <h1 className="dest-title">Why Visit Ravana Falls?</h1>
              <p className="dest-description">
                Ravana Falls is one of Sri Lanka's most iconic waterfalls, located near Ella. According to legend, it is associated with King Ravana from the Ramayana.
              </p>
              <ul className="dest-features">
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Scenic travel routes
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Easy sightseeing access
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Relaxed travel experience
                </li>
              </ul>
              <div className="dest-meta">
                <span>🚗 Land Trip</span>
                <span>📅 1 Day</span>
                <span>🎯 Sightseeing</span>
              </div>
            </div>
          </div>

          <div className="dest-bottom-section">
            <div className="dest-bottom-left">
              <p className="dest-bottom-text">
                Ravana Falls is a stunning waterfall located along the Ella-Wellawaya road, cascading from approximately 25 meters high. Named after the legendary King Ravana from the Hindu epic Ramayana, the falls are surrounded by lush greenery and rock formations, creating a picturesque natural setting perfect for photography and nature appreciation.
              </p>
              <p className="dest-bottom-text">
                The waterfall is easily accessible from the main road and offers a refreshing swimming spot at its base. Visitors can enjoy the natural beauty, cool mist, and scenic surroundings. Ravana Falls is an ideal stop when traveling between Ella and southern Sri Lanka, combining legend, natural beauty, and easy accessibility.
              </p>
            </div>
            <div className="dest-bottom-right">
              <img
                src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800"
                alt="Ravana Falls View"
              />
            </div>
          </div>

          {/* Ceylon D Tour Section */}
          <div className="dest-main-section" style={{ marginTop: '4rem' }}>
            <div className="dest-left">
              <img
                src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800"
                alt="Ceylon D Tour Ravana Falls experience"
              />
            </div>
            <div className="dest-right">
              <p className="dest-description">
                Ceylon D Tour includes Ravana Falls visits in Ella region tour packages with convenient transportation stops, photo opportunities, and flexible sightseeing schedules. Our services integrate waterfall visits with nearby attractions like Ella Rock and Nine Arch Bridge. With Ceylon D Tour, you can experience Ravana Falls' natural beauty, legendary history, and scenic charm as part of a comprehensive hill-country tour with personalized service and smooth travel arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default RavanaFalls;
