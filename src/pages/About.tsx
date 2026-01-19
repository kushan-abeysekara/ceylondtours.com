import React, { useEffect } from 'react';
import './About.css';
import ServiceCard from '../components/ServiceCard';
import TourStats from '../components/TourStats';
import FAQAccordion from '../components/FAQAccordion';
import StatsCounter from '../components/StatsCounter';

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      icon: (
        <img src={require('../img/abouticon1.png')} alt="Ocean cruises" className="service-icon-animated" style={{ width: '100px', height: '60px' }} />
      ),
      title: 'Ocean cruises',
      description: 'Lorem ipsum dolor amet consetur adipiscing sed eiusmod tempor.'
    },
    {
      id: 2,
      icon: (
         <img src={require('../img/abouticon2.png')} alt="Ocean cruises" className="service-icon-animated" style={{ width: '60px', height: '60px' }} />
      ),
      title: 'Mountain holidays',
      description: 'Lorem consectetur adipiscing sediu eiusmod tempor incididunt ut labore.'
    },
    {
      id: 3,
      icon: (
         <img src={require('../img/abouticon3.png')} alt="Ocean cruises" className="service-icon-animated" style={{ width: '60px', height: '60px' }} />
      ),
      title: 'Cultural Events',
      description: 'Ipsum dolor sit amet adipicing elit eiusmod tempor in at labore dolore.'
    },
    {
      id: 4,
      icon: (
        <img src={require('../img/abouticon4.png')} alt="Ocean cruises" className="service-icon-animated" style={{ width: '100px', height: '100px' }} />
      ),
      title: 'Individual transfer',
      description: 'Lorem dolor sit amet consectetur adipicing sed eiusmod tempor incididunt.'
    },
    {
      id: 5,
      icon: (
        <img src={require('../img/abouticon5.png')} alt="Ocean cruises" className="service-icon-animated" style={{ width: '60px', height: '60px' }} />
      ),
      title: 'Group transfer',
      description: 'Dolor amet consectetur adipisicing elit, sed do eiusmod tempor incididunt.'
    },
    {
      id: 6,
      icon: (
         <img src={require('../img/abouticon6.png')} alt="Ocean cruises" className="service-icon-animated" style={{ width: '70px', height: '50px' }} />
      ),
      title: 'Sightseeing',
      description: 'Lorem dolor lorem elit adipiscing elit dolore at eiusmod et temporibus.'
    }
  ];

  const happyTravelers = [
    require('../img/happyTravelers1.jpg'),
    require('../img/happyTravelers2.jpg'),
    require('../img/happyTravelers3.jpg'),
    require('../img/happyTravelers4.jpg'),
    require('../img/happyTravelers5.jpg'),
    require('../img/happyTravelers6.jpg')
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
              <div className="tripadvisor-badge">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="white"/>
                  <circle cx="20" cy="20" r="12" fill="#34E0A1"/>
                  <path d="M20 12c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" fill="black"/>
                </svg>
                <span className="tripadvisor-text">Tripadvisor</span>
              </div>
              <div className="city-illustration">
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
                <div className="building building-1"></div>
                <div className="building building-2"></div>
                <div className="building building-3"></div>
              </div>
            </div>
            <div className="cta-banner-right">
              <h3 className="cta-banner-title">Book your holiday with complete confidence</h3>
              <a href="https://www.tripadvisor.com/Attraction_Review-g297896-d13293559-Reviews-Ceylon_D_Tours-Galle_Galle_District_Southern_Province.html" className="cta-banner-btn" target="_blank" rel="noopener noreferrer">
                Book Now
                <img src={require('../img/Booknow.png')} alt="Book Now" className="infinity-icon" style={{ width: '20px', height: '15px', filter: 'brightness(0)' }} />
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
              <img src={require('../img/Abouts2.jpg')} alt="Tropical paradise" />
            </div>
            <div className="vacation-stats">
              <h2 className="vacation-title">Turn Your Vacation Dreams Into Reality.</h2>
              <p className="vacation-description">
                Turn your travel dreams into reality vacation. It's travel, beautifully, 
                unforgettable, and makes your dreams come into real unforgettable journeys.
              </p>
              
              <div className="tour-stats-list">
                <TourStats title="Super Group Tours" percentage={95} />
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
              <img src={require('../img/Abouts1.jpg')} alt="Mountain hiking" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Stats */}
      <section className="final-cta-section">
        <div className="final-cta-overlay">
          <div className="container">
            <div className="final-cta-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="20" fill="white"/>
                <ellipse cx="30" cy="30" rx="35" ry="8" fill="white" opacity="0.5"/>
              </svg>
            </div>
            <h2 className="final-cta-title">Dare to Explore with<br />Travel</h2>
            
            <div className="stats-container">
              <StatsCounter number="200k" label="Happy travelers" />
              <StatsCounter number="120" label="Destinations" />
              <StatsCounter number="224" label="Tours" />
              <StatsCounter number="200k" label="Happy travelers" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
