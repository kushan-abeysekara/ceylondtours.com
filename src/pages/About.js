import React from 'react';
import './About.css';
import ServiceCard from '../components/ServiceCard';
import TourStats from '../components/TourStats';
import FAQAccordion from '../components/FAQAccordion';
import StatsCounter from '../components/StatsCounter';

const About = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 35c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z" stroke="currentColor" strokeWidth="2"/>
          <path d="M5 20h30M20 5c3.5 0 6.5 6.716 6.5 15s-3 15-6.5 15c-3.5 0-6.5-6.716-6.5-15S16.5 5 20 5z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Ocean cruises',
      description: 'Lorem ipsum dolor amet consetur adipiscing sed eiusmod tempor.'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 30l10-15 5 5 10-15 5 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 30h34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Mountain holidays',
      description: 'Lorem consectetur adipiscing sediu eiusmod tempor incididunt ut labore.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 25c2-3 4-5 8-5s6 2 8 5M5 30h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="15" r="3" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Surfing',
      description: 'Ipsum dolor sit amet adipicing elit eiusmod tempor in at labore dolore.'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 28h24v-8H8v8zM14 20v-6h12v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="10" cy="30" r="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="30" r="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Individual transfer',
      description: 'Lorem dolor sit amet consectetur adipicing sed eiusmod tempor incididunt.'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 28h30v-8H5v8zM11 20v-6h18v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="10" cy="30" r="2" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="30" r="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 14v-4M25 14v-4M20 14v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Group transfer',
      description: 'Dolor amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10h10M15 15h10M15 20h10M10 10v15M30 10v15M5 25h30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Sightseeing',
      description: 'Lorem dolor lorem elit adipiscing elit dolore at eiusmod et temporibus.'
    }
  ];

  const happyTravelers = [
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
    'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400',
    'https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?w=400',
    'https://images.unsplash.com/photo-1504614992173-5d1fff6c6e12?w=400'
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I book a tour?',
      answer: 'You can easily book online or contact our office. Choose your package, select your dates, and confirm with our team.'
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and online payment platforms for your convenience.'
    },
    {
      id: 3,
      question: 'Can I customise my tour package?',
      answer: 'Yes! We offer fully customizable tour packages to match your preferences, schedule, and budget.'
    },
    {
      id: 4,
      question: 'What if I need to cancel or reschedule?',
      answer: 'We have flexible cancellation policies. Contact us at least 48 hours before your tour for rescheduling options.'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1 className="about-hero-title">About Us</h1>
        </div>
      </section>

      {/* Dare to Explore Section */}
      <section className="explore-section">
        <div className="container">
          <div className="explore-header">
            <h2 className="explore-title">Dare to Explore with<br />Travel Agency</h2>
            <p className="explore-description">
              We specialize in eco-conscious travel and sustainable stays, and Platinum WorldGroup 
              is the exclusive platform sourcing them from the best hoteliers.
            </p>
          </div>

          <div className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <div className="cta-banner-left">
              <div className="cta-illustration">
                <span className="cta-emoji">🏢</span>
              </div>
            </div>
            <div className="cta-banner-center">
              <h3 className="cta-banner-title">Book your holiday with complete confidence</h3>
            </div>
            <div className="cta-banner-right">
              <a href="/book" className="cta-banner-btn">
                Book Now
                <span className="infinity-icon">∞</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Travelers Section */}
      <section className="travelers-section">
        <div className="container">
          <h2 className="section-title">Happy Travelers</h2>
          <p className="section-subtitle">
            See our happy travelers enjoying Sri Lanka! Real smiles, joyful moments, 
            and unforgettable experiences captured during their journeys with us.
          </p>

          <div className="travelers-grid">
            {happyTravelers.map((image, index) => (
              <div key={index} className="traveler-photo">
                <img src={image} alt={`Happy traveler ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacation Dreams Section */}
      <section className="vacation-section">
        <div className="container">
          <div className="vacation-content">
            <div className="vacation-image">
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600" alt="Tropical paradise" />
            </div>
            <div className="vacation-stats">
              <h2 className="vacation-title">Turn Your Vacation Dreams Into Reality.</h2>
              <p className="vacation-description">
                Turn your travel dreams into reality vacation. It's travel, beautifully, 
                unforgettable, and makes your dreams come into real unforgettable journeys.
              </p>
              
              <div className="tour-stats-list">
                <TourStats title="Super Group Tours" percentage={65} />
                <TourStats title="Private Tours" percentage={92} />
                <TourStats title="Multi-day Tours" percentage={90} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-left">
              <h2 className="faq-title">F.A.Q.</h2>
              <div className="faq-list">
                {faqs.map(faq => (
                  <FAQAccordion key={faq.id} {...faq} />
                ))}
              </div>
            </div>
            <div className="faq-right">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600" alt="Mountain hiking" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Stats */}
      <section className="final-cta-section">
        <div className="final-cta-overlay">
          <div className="container">
            <h2 className="final-cta-title">Dare to Explore with Travel</h2>
            
            <div className="stats-container">
              <StatsCounter number="200k" label="Happy travelers" />
              <StatsCounter number="120" label="Destinations" />
              <StatsCounter number="224" label="Tours" />
              <StatsCounter number="200k" label="Happy travelers" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-contact-cta">
        <div className="container">
          <div className="about-contact-content">
            <p className="about-contact-text">Don't Know Where Destination To Choose?</p>
            <a href="tel:+94858775477" className="about-contact-phone">📞 Call Us: (858) 577-3477</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
