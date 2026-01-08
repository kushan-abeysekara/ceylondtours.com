import React from 'react';
import './Home.css';
import DestinationCard from '../components/DestinationCard';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';
import MemoriesSection from '../components/MemoriesSection';

const Home = () => {
  const popularDestinations = [
    { id: 1, image: 'https://images.unsplash.com/photo-1580549239615-367449433e06?w=500', badge: 'Belihul Ela' },
    { id: 2, image: 'https://images.unsplash.com/photo-1588971550723-4c4ae923cdbb?w=500', badge: 'Nine Arch' },
    { id: 3, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500', badge: 'Hiriketiya' },
    { id: 4, image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500', badge: 'Arugam Bay' },
    { id: 5, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500', badge: 'Sigiriya' },
    { id: 6, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96a47?w=500', badge: 'Ella Balena' }
  ];

  const topDestinations = [
    { id: 1, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800', title: 'Sigiriya' },
    { id: 2, image: 'https://images.unsplash.com/photo-1588971550723-4c4ae923cdbb?w=800', title: 'Nine Arch' },
    { id: 3, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', title: 'Mirissa' }
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
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Live your dream destinations.</h1>
            <p className="hero-subtitle">
              Discover unforgettable journeys designed to turn your travel dreams into reality
            </p>
            
            <div className="search-card">
              <div className="search-field">
                <span className="search-icon">📍</span>
                <div className="search-input-group">
                  <label>Location</label>
                  <input type="text" placeholder="Where are you going?" />
                </div>
              </div>
              
              <div className="search-divider"></div>
              
              <div className="search-field">
                <span className="search-icon">📅</span>
                <div className="search-input-group">
                  <label>Date</label>
                  <input type="text" placeholder="Add dates" />
                </div>
              </div>
              
              <div className="search-divider"></div>
              
              <div className="search-field">
                <span className="search-icon">✈️</span>
                <div className="search-input-group">
                  <label>Travel</label>
                  <input type="text" placeholder="Add guests" />
                </div>
              </div>
              
              <button className="search-button">Search</button>
            </div>
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
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" alt="Colonial Building" />
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

      {/* Contact CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <p className="contact-cta-text">Don't Hesitate, Contact us for better help and services</p>
            <a href="tel:+94858775477" className="contact-cta-phone">📞 Call Us: (858) 577-5477</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
