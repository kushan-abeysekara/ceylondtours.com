import React, { useState, useEffect } from 'react';
import './MemoriesSection.css';

const MemoriesSection = () => {
  const imageSet1 = [
    require('../img/Memory1.jpg'),
    require('../img/Memory2.jpg'),
    require('../img/Memory3.jpg'),
    require('../img/Memory4.jpg'),
    require('../img/Memory5.jpg'),
    require('../img/Memory6.jpg')
  ];

  const imageSet2 = [
    require('../img/happyTravelers1.jpg'),
    require('../img/happyTravelers2.jpg'),
    require('../img/happyTravelers3.jpg'),
    require('../img/happyTravelers4.jpg'),
    require('../img/happyTravelers5.jpg'),
    require('../img/happyTravelers6.jpg')
  ];

  const imageSets = [imageSet1, imageSet2];

  const memories = [
    { id: 1, title: 'Family Adventure' },
    { id: 2, title: 'Mountain Exploration' },
    { id: 3, title: 'Nature Journey' },
    { id: 4, title: 'Family Adventure' },
    { id: 5, title: 'Mountain Exploration' },
    { id: 6, title: 'Nature Journey' }
  ];

  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [imageSets.length]);

  return (
    <section className="memories-section">
      <div className="memories-container">
        <h2 className="memories-heading">Memories With Us</h2>
        <p className="memories-subheading">
          Real experiences from real travelers exploring Sri Lanka, capturing 
          timeless memories, unforgettable adventures, and unforgettable moments with us.
        </p>
        
        <div className="memories-grid">
          {memories.map((memory, index) => (
            <div key={memory.id} className="memory-card">
              <div className="memory-image-container">
                <img 
                  src={imageSets[currentSetIndex][index]} 
                  alt={memory.title} 
                  className="memory-image" 
                  key={`${currentSetIndex}-${index}`}
                />
                <a 
                  href="https://www.tripadvisor.com/Attraction_Review-g297896-d13293559-Reviews-Ceylon_D_Tours-Galle_Galle_District_Southern_Province.html"
                  className="memory-view-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
