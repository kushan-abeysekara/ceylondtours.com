import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DestinationCard.css';

interface DestinationCardProps {
  image: string | string[];
  title?: string;
  badge?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
  link?: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, badge, description, size = 'medium', link = '/destinations' }) => {
  const images = Array.isArray(image) ? image : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <div className={`destination-card ${size}`}>
      <div className="destination-image-wrapper">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={title || badge || 'Destination'} 
            className={`destination-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="destination-content">
        <h3 className="destination-title">
          {title || badge || 'Get special offers and more from Travel'}
        </h3>
        <p className="destination-description">
          {description || 'Facilisi vulputate malesuada libero vitae fusce placerat dignissim blandit.'}
        </p>
        <Link to={link} className="destination-btn">
          View More
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
