import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ icon, title, info }) => {
  return (
    <div className="contact-info-card">
      <div className="contact-info-icon">{icon}</div>
      <h3 className="contact-info-title">{title}</h3>
      <div className="contact-info-details">
        {info.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCard;
