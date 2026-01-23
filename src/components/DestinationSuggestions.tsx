import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationSuggestions.css';

interface Destination {
  name: string;
  image: string;
  path: string;
}

interface DestinationSuggestionsProps {
  currentDestination: string;
  suggestions?: Destination[];
}

const DestinationSuggestions: React.FC<DestinationSuggestionsProps> = ({ 
  currentDestination, 
  suggestions 
}) => {
  // Default suggestions will be provided by the destinations data
  const displaySuggestions = suggestions || [];

  if (displaySuggestions.length === 0) {
    return null;
  }

  return (
    <section className="destination-suggestions">
      <div className="suggestions-container">
        <h2 className="suggestions-title">Explore More Destinations</h2>
        <div className="suggestions-grid">
          {displaySuggestions.map((destination, index) => (
            <Link 
              to={destination.path} 
              key={index} 
              className="suggestion-card"
            >
              <div className="suggestion-image-wrapper">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="suggestion-image"
                />
                <div className="suggestion-overlay">
                  <span className="suggestion-name">{destination.name}</span>
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className="suggestion-arrow"
                  >
                    <path 
                      d="M5 12h14M12 5l7 7-7 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSuggestions;
