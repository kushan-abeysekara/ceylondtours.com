import React from 'react';
import './StatsCounter.css';

const StatsCounter = ({ number, label }) => {
  return (
    <div className="stats-counter">
      <h3 className="stats-number">{number}</h3>
      <p className="stats-label">{label}</p>
    </div>
  );
};

export default StatsCounter;
