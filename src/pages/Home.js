import React, { useState, useEffect } from 'react';
import './Home.css';
import DestinationCard from '../components/DestinationCard';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';
import MemoriesSection from '../components/MemoriesSection';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/img/slider1.jpg',
    '/img/slider2.webp',
    '/img/slider3.jpg',
    '/img/slider4.jpg'
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const popularDestinations = [
    { id: 1, image: '/img/BoburuElla.webp', badge: 'Boburu Ella' },
    { id: 2, image: '/img/NineArch.jpg', badge: 'Nine Arch' },
    { id: 3, image: '/img/Hiriketiya.webp', badge: 'Hiriketiya' },
    { id: 4, image: '/img/Arugambay.jpg', badge: 'Arugam Bay' },
    { id: 5, image: '/img/Sigiriya.jpg', badge: 'Sigiriya' },
    { id: 6, image: '/img/Ella.jpg', badge: 'Ella-Badulla' }
  ];

  const topDestinations = [
    { id: 1, image: '/img/sigiriya.jpg', title: 'Sigiriya' },
    { id: 2, image: '/img/NineArch.jpg', title: 'Nine Arch' },
    { id: 3, image: '/img/Mirissa1.jpg', title: 'Mirissa' }
  ];

  const testimonials = [
    { 
      id: 1, 
      name: 'Charlie R', 
      image: 'https://i.pravatar.cc/150?img=1',
      rating: '5.0',
      text: 'It was an amazing trip to Sri Lanka. Our tour guide was very friendly and knowledgeable. The places we visit were absolutely great places and learned lot about Sri Lankan culture and history.'
    },
    { 
      id: 2, 
      name: 'Julia D', 
      image: 'https://i.pravatar.cc/150?img=5',
      rating: '5.0',
      text: 'Brilliant work! I went there for a night, but not enough to explore the beauty of Sri Lanka, even the food was great, and our coordinator was very nice, humble, friendly and made us comfortable.'
    },
    { 
      id: 3, 
      name: 'Charles H', 
      image: 'https://i.pravatar.cc/150?img=12',
      rating: '5.0',
      text: 'One of the best trip experiences my wife and I have had. The beauty was incomparable and provided us with more than we expected. The sites, hotels and restaurants was top class throughout.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slideshow">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Live your dream<br />destinations.</h1>
            <p className="hero-subtitle">
              Quisq eu consqur ornare congue non enim<br />
              pellentesque eleifend ipsum.
            </p>
          </div>
          
          <div className="search-card">
            <div className="search-field">
              <svg className="search-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="search-input-group">
                <label>Location</label>
                <input type="text" placeholder="Where are you going?" />
              </div>
            </div>
            
            <div className="search-divider"></div>
            
            <div className="search-field">
              <svg className="search-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="search-input-group">
                <label>Date</label>
                <input type="text" placeholder="Set date" />
              </div>
            </div>
            
            <div className="search-divider"></div>
            
            <div className="search-field">
              <svg className="search-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="search-input-group">
                <label>Travel</label>
                <input type="text" placeholder="How to travel ?" />
              </div>
            </div>
            
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Discover the most beautiful and historic places in Sri Lanka. From sandy beaches to ancient 
            cities and wildlife safaris, our popular destinations offer unforgettable experiences for every traveler.
          </p>
          
          <button className="view-all-btn">All Destinations →</button>
          
          <div className="destinations-grid">
            {popularDestinations.map(dest => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className="top-destinations-section">
        <div className="container">
          <h2 className="section-title">Top Destinations</h2>
          
          <div className="top-destinations-grid">
            {topDestinations.map(dest => (
              <DestinationCard key={dest.id} {...dest} size="large" />
            ))}
          </div>
          
          <button className="view-all-btn">All Destinations →</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <FeatureCard 
              icon="🛡️"
              title="Book With Confidence"
              description="We provide safe and reliable tour packages, secure bookings, and world-support that gets to know you."
            />
            <FeatureCard 
              icon="😊"
              title="Stress-free experience"
              description="We take care of all planning and booking to holiday planning, transport, accommodation for you."
            />
            <FeatureCard 
              icon="⚡"
              title="Flexible tour options"
              description="Make plans that fit perfectly with your match your schedule, budget, and travel preferences easily."
            />
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <MemoriesSection />

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What our clients say about us</h2>
          
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-image">
              <img src="/img/HomeBottom.jpg" alt="Colonial Building" />
            </div>
            <div className="newsletter-form-wrapper">
              <h2 className="newsletter-title">Get special offers and more from Travel</h2>
              <p className="newsletter-subtitle">
                Subscribe to see secret deals prices drop the moment you sign up and affordable and memorable.
              </p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="newsletter-input"
                />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
