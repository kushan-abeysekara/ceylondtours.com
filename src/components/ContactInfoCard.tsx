import React from 'react';
import './ContactInfoCard.css';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  info: string[];
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, info }) => {
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
