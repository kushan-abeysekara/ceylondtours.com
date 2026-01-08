import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ image, title, badge, size = 'medium' }) => {
  return (
    <div className={`destination-card ${size}`}>
      <img src={image} alt={title} className="destination-image" />
      <div className="destination-overlay">
        {badge && <span className="destination-badge">{badge}</span>}
        {title && <h3 className="destination-title">{title}</h3>}
      </div>
    </div>
  );
};

export default DestinationCard;
