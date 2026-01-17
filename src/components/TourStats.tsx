import React from 'react';
import './TourStats.css';

const TourStats = ({ title, percentage }) => {
  return (
    <div className="tour-stat">
      <div className="tour-stat-header">
        <span className="tour-stat-title">{title}</span>
        <span className="tour-stat-percentage">{percentage}%</span>
      </div>
      <div className="tour-stat-bar">
        <div className="tour-stat-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default TourStats;
