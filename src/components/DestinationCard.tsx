import React from 'react';
import './DestinationCard.css';

interface DestinationCardProps {
  image: string;
  title?: string;
  badge?: string;
  description?: string;
  size?: 'small' | 'medium' | 'large';
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, badge, description, size = 'medium' }) => {
  return (
    <div className={`destination-card ${size}`}>
      <div className="destination-image-wrapper">
        <img src={image} alt={title || badge || 'Destination'} className="destination-image" />
      </div>
      <div className="destination-content">
        <h3 className="destination-title">
          {title || badge || 'Get special offers and more from Travel'}
        </h3>
        <p className="destination-description">
          {description || 'Facilisi vulputate malesuada libero vitae fusce placerat dignissim blandit.'}
        </p>
        <a href="https://www.tripadvisor.com/Attraction_Review-g297896-d13293559-Reviews-Ceylon_D_Tours-Galle_Galle_District_Southern_Province.html" className="destination-btn" target="_blank" rel="noopener noreferrer">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
