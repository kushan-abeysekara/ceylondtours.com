import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: require('../img/Memory1.jpg'), category: 'memories', title: 'Beautiful Moments' },
    { src: require('../img/happyTravelers1.jpg'), category: 'travelers', title: 'Happy Travelers' },
    { src: require('../img/Memory2.jpg'), category: 'memories', title: 'Adventure Time' },
    { src: require('../img/happyTravelers2.jpg'), category: 'travelers', title: 'Joyful Journey' },
    { src: require('../img/Memory3.jpg'), category: 'memories', title: 'Scenic Views' },
    { src: require('../img/happyTravelers3.jpg'), category: 'travelers', title: 'Smiling Faces' },
    { src: require('../img/Memory4.jpg'), category: 'memories', title: 'Unforgettable' },
    { src: require('../img/happyTravelers4.jpg'), category: 'travelers', title: 'Great Times' },
    { src: require('../img/Memory5.jpg'), category: 'memories', title: 'Explore More' },
    { src: require('../img/happyTravelers5.jpg'), category: 'travelers', title: 'Happy Moments' },
    { src: require('../img/Memory6.jpg'), category: 'memories', title: 'Dream Destination' },
    { src: require('../img/happyTravelers6.jpg'), category: 'travelers', title: 'Travel Stories' }
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay">
          <h1 className="gallery-hero-title">Memories & Happy Travelers</h1>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-header">
            <h2 className="section-title">Our Beautiful Memories</h2>
            <p className="section-subtitle">
              Every picture tells a story of adventure, joy, and unforgettable experiences. 
              Explore the moments that made our travelers smile!
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`gallery-item gallery-item-${(index % 5) + 1}`}
                onClick={() => openLightbox(image.src)}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <span className="gallery-category">{image.category}</span>
                    <h3 className="gallery-title">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
            <img src={selectedImage} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;