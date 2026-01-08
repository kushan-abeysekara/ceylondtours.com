import React from 'react';
import './MemoriesSection.css';

const MemoriesSection = () => {
  const memories = [
    {
      id: 1,
      image: '/img/Memory1.jpg',
      category: 'Tourism & Travel',
      title: 'Family Adventure'
    },
    {
      id: 2,
      image: '/img/Memory2.jpg',
      category: 'Tourism & Travel',
      title: 'Mountain Exploration'
    },
    {
      id: 3,
      image: '/img/Memory3.jpg',
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
