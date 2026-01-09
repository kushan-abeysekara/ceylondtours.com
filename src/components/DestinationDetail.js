import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationDetail.css';

const DestinationDetail = ({ id, title, description, features, image, icons, reverse }) => {
  const getDestinationPath = (id) => {
    const paths = {
      1: '/destinations/sigiriya',
      2: '/destinations/nine-arch-bridge',
      3: '/destinations/arugam-bay',
      4: '/destinations/temple-of-tooth',
      5: '/destinations/bomburu-ella'
    };
    return paths[id] || '/destinations';
  };

  return (
    <div className={`destination-detail ${reverse ? 'reverse' : ''}`}>
      <div className="destination-detail-content">
        <h2 className="destination-detail-title">{title}</h2>
        <p className="destination-detail-description">{description}</p>
        
        <ul className="destination-features">
          {features.map((feature, index) => (
            <li key={index} className="destination-feature">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.333 4L6 11.333 2.667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="destination-icons">
          {icons.map((icon, index) => (
            <div key={index} className="destination-icon-item">
              <div className="destination-icon-svg">{icon.icon}</div>
              <span className="destination-icon-label">{icon.label}</span>
            </div>
          ))}
        </div>
        
        <Link to={getDestinationPath(id)} className="destination-detail-btn">View Details</Link>
      </div>
      
      <div className="destination-detail-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default DestinationDetail;
