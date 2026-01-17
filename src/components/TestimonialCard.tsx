import React from 'react';
import './TestimonialCard.css';

interface TestimonialCardProps {
  name: string;
  image: string;
  rating: number | string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, image, rating, text }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={image} alt={name} className="testimonial-avatar" />
        <div className="testimonial-rating">
          <span className="rating-badge">{rating}</span>
        </div>
      </div>
      <h4 className="testimonial-name">{name}</h4>
      <p className="testimonial-text">{text}</p>
    </div>
  );
};

export default TestimonialCard;
