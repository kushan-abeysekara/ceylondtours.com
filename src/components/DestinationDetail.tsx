import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationDetail.css';

interface DestinationDetailProps {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: any;
  icons: { icon: string; label: string; }[];
  reverse: boolean;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ id, title, description, features, image, icons, reverse }) => {
  const getDestinationPath = (id: number): string => {
    const paths = {
      1: '/destinations/sigiriya',
      2: '/destinations/nine-arch-bridge',
      3: '/destinations/arugam-bay',
      4: '/destinations/temple-of-tooth',
      5: '/destinations/bomburu-ella',
      6: '/destinations/ella',
      7: '/destinations/kandy',
      8: '/destinations/nuwara-eliya',
      9: '/destinations/galle-fort',
      10: '/destinations/yala-national-park',
      11: '/destinations/mirissa',
      12: '/destinations/bentota',
      13: '/destinations/anuradhapura',
      14: '/destinations/polonnaruwa',
      15: '/destinations/dambulla-cave-temple',
      16: '/destinations/horton-plains',
      17: '/destinations/adams-peak',
      18: '/destinations/trincomalee',
      19: '/destinations/hikkaduwa',
      20: '/destinations/udawalawe-national-park',
      21: '/destinations/kalpitiya',
      22: '/destinations/jaffna',
      23: '/destinations/knuckles-mountain-range',
      24: '/destinations/kitulgala',
      25: '/destinations/pasikuda',
      26: '/destinations/negombo',
      27: '/destinations/mahiyanganaya',
      28: '/destinations/ravana-falls',
      29: '/destinations/pidurangala-rock',
      30: '/destinations/sinharaja-forest',
      31: '/destinations/wilpattu-national-park',
      32: '/destinations/batticaloa',
      33: '/destinations/badulla',
      34: '/destinations/hatton',
      35: '/destinations/matara',
      36: '/destinations/hambantota',
      37: '/destinations/kataragama',
      38: '/destinations/colombo'
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
