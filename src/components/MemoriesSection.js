import React from 'react';
import './MemoriesSection.css';

const MemoriesSection = () => {
  const memories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500',
      category: 'Tourism & Travel',
      title: 'Family Adventure'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500',
      category: 'Tourism & Travel',
      title: 'Mountain Exploration'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500',
      category: 'Tourism & Travel',
      title: 'Nature Journey'
    }
  ];

  return (
    <section className="memories-section">
      <div className="memories-container">
        <h2 className="memories-heading">Memories With Us</h2>
        <p className="memories-subheading">
          Real experiences from real travelers exploring Sri Lanka, capturing 
          timeless memories, unforgettable adventures, and unforgettable moments with us.
        </p>
        
        <div className="memories-grid">
          {memories.map(memory => (
            <div key={memory.id} className="memory-card">
              <img src={memory.image} alt={memory.title} className="memory-image" />
              <div className="memory-info">
                <p className="memory-category">{memory.category}</p>
                <a href="#" className="memory-link">View →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
