import React from 'react';
import './DestinationCard.css';

interface DestinationCardProps {
  image: string;
  title?: string;
  badge?: string;
  size?: 'small' | 'medium' | 'large';
}

const DestinationCard: React.FC<DestinationCardProps> = ({ image, title, badge, size = 'medium' }) => {
  return (
    <div className={`destination-card ${size}`}>
      <img src={image} alt={title || badge || 'Destination'} className="destination-image" />
      <div className="destination-overlay">
        {badge && <span className="destination-badge">{badge}</span>}
        {title && <h3 className="destination-title">{title}</h3>}
      </div>
    </div>
  );
};

export default DestinationCard;
