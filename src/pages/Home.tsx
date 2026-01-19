import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import DestinationCard from '../components/DestinationCard';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';
import MemoriesSection from '../components/MemoriesSection';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCardPair, setCurrentCardPair] = useState(0);

  const heroImages = [
    require('../img/slider1.jpg'),
    require('../img/slider2.webp'),
    require('../img/slider3.jpg'),
    require('../img/slider4.jpg')
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
    { 
      id: 1, 
      image: [
        require('../img/BoburuElla.webp'),
        require('../img/bomburu 1.webp'),
        require('../img/bomuru-ella 3.jpg')
      ], 
      badge: 'Bomburu Ella',
      title: 'Discover Bomburu Ella',
      description: 'Boburu Ella is a breathtaking waterfall near Ella, surrounded by thick forests and cool mountain air. It is an ideal place for nature lovers, photography enthusiasts, and travelers seeking peace, freshness, and scenic beauty.'
    },
    { 
      id: 2, 
      image: [
        require('../img/NineArch.jpg'),
        require('../img/nine arch 1.webp'),
        require('../img/nine arch 2.webp')
      ], 
      badge: 'Nine Arch Bridge',
      title: 'Discover Nine Arch Bridge',
      description: 'Nine Arch Bridge is a famous historic railway bridge located in Ella, known for its impressive stone arches, lush green surroundings, and the magical experience of watching trains pass through the misty hills.'
    },
    { 
      id: 3, 
      image: [
        require('../img/Hiriketiya.webp'),
        require('../img/hiriketiya 2.jpg'),
        require('../img/hiriketiya 1.jpg')
      ], 
      badge: 'Hiriketiya',
      title: 'Discover Hiriketiya Beach',
      description: 'Hiriketiya is a charming crescent-shaped beach popular for surfing, swimming, yoga, and relaxation. With calm waters, golden sands, cafés, and a relaxed atmosphere, it attracts travelers seeking peaceful beachside experiences.'
    },
    { 
      id: 4, 
      image: [
        require('../img/arugam bay 1.webp'),
        require('../img/arugam bay 2.webp'),
        require('../img/arugam bay 3.webp')
      ], 
      badge: 'Arugam Bay',
      title: 'Discover Arugam Bay',
      description: 'Arugam Bay is a world-renowned surfing destination on Sri Lanka’s east coast, famous for long waves, laid-back beach culture, nearby wildlife spots, and stunning sunsets enjoyed by surfers and travelers from around the world.'
    },
    { 
      id: 5, 
      image: [
        require('../img/sigiriya_head.webp'),
        require('../img/sigiriya 1.webp'),
        require('../img/sigiriya 2.webp')
      ], 
      badge: 'Sigiriya',
      title: 'Discover Sigiriya Rock',
      description: 'Sigiriya is an ancient rock fortress and UNESCO World Heritage Site, famous for its royal gardens, fresco paintings, mirror wall, and panoramic views from the summit, showcasing Sri Lanka’s rich history and culture.'
    },
    { 
      id: 6, 
      image: [
        require('../img/Ella.jpg'),
        require('../img/ella 2.webp'),
        require('../img/ella 3.webp')
      ], 
      badge: 'Ella',
      title: 'Discover Ella',
      description: 'Ella and Badulla are beautiful hill-country destinations offering cool weather, scenic train journeys, tea plantations, waterfalls, hiking trails, and peaceful mountain landscapes, making them perfect for relaxation, sightseeing, and adventure travel experiences.'
    }
  ];

  // Cycle through destination card pairs every 4.5 seconds (3 images × 1.5s)
  useEffect(() => {
    const cardTimer = setInterval(() => {
      setCurrentCardPair((prev) => (prev + 1) % 3); // 3 pairs: 0-1, 2-3, 4-5
    }, 4500);

    return () => clearInterval(cardTimer);
  }, []);

  const topDestinations = [
    { id: 1, image: require('../img/Sigiriya.jpg'), title: 'Sigiriya' },
    { id: 2, image: require('../img/NineArch.jpg'), title: 'Nine Arch' },
    { id: 3, image: require('../img/Mirissa1.jpg'), title: 'Mirissa' }
  ];

  const testimonials = [
    { 
      id: 1, 
      name: 'José Manuel C', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f1/79/default-avatar-2020-21.jpg?w=300&h=-1&s=1',
      rating: '5.0',
      text: 'People that know me say I have travel a lot and in the case of Dami, for me it has been the Best professional that I have had, and furthermore the Best person, that has accompany me in my journeys. Thank you Dami, I wish you the Best in your New endeavour!'
    },
    { 
      id: 2, 
      name: 'Kitty F', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e8/24/default-avatar-2020-60.jpg?w=300&h=-1&s=1',
      rating: '"',
      text: 'Dami drove us for four days around the centre of Sri Lanka. We saw so much of the beautiful country and he taught us a lot about the culture and landscape whilst keeping us safe travelling through bumpy roads. He is great company, very efficient, thoughtful and always on time. We highly recommend Dami and will definitely be back to tour with him again in this very special place.'
    },
    { 
      id: 3, 
      name: 'Charlie D', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/6a/default-avatar-2020-47.jpg?w=300&h=-1&s=1',
      rating: '5.0',
      text: 'It was an amazing trip to Sri Lanka and a lot of that can be attributed to Dami. He went above and beyond to provide a great service and is very personable. 10/10 would recommend to anyone'
    },
    { 
      id: 4, 
      name: 'Julia D', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f1/42/default-avatar-2020-20.jpg?w=300&h=-1&s=1',
      rating: '5.0',
      text: 'Brilliant on all levels.Traveled w family and found Dami very good with all of us sharing his culture and knowledge Generous with time and sharing great food stops along the wayClean car and always helpful. Highly recommend'
    },
    { 
      id: 5, 
      name: 'Charlie H', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f4/20/default-avatar-2020-31.jpg?w=300&h=-1&s=1',
      rating: '5/5',
      text: 'Dami was the best tour guide we could have wished for. He was kind and knowledgeable and ensured our trip was the best possible experience. I could not recommend him enough.'
    },
    { 
      id: 6, 
      name: 'Gosia W', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/de/0a/default-avatar-2020-35.jpg?w=200&h=-1&s=1',
      rating: '5.0',
      text: 'We had a great trip over Sri Lanka in July with Dami: the best guide😍. His knowledge and amazing care is our best memory from this beatiful island🪷.'
    },
    { 
      id: 7, 
      name: 'Grace T', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e9/60/default-avatar-2020-64.jpg?w=200&h=-1&s=1',
      rating: '5.0',
      text: 'Dami is fantastic! He is so kind, caring and friendly and will go above and beyond to show you the best spots in Sri Lanka! He is so knowledgeable on Sri Lankan history and native flora and fauna. I’d recommend him to everyone!'
    },
    { 
      id: 8, 
      name: 'Benjamin L', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ea/b2/default-avatar-2020-69.jpg?w=200&h=-1&s=1',
      rating: '4.8',
      text: 'Daminda is not only the best and safest driver in Sri Lanka, he has also the best knowledge and contacts.He is a very understanding and calm person! We did a tour around the Island for almost one week with him and the experience could not have been any better.'
    },
    { 
      id: 9, 
      name: 'Peter L', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ea/b2/default-avatar-2020-69.jpg?w=200&h=-1&s=1',
      rating: '5.0',
      text: 'Absolutely excellent guide, excellent knowledge and conversation, entertaining, patient, thoughtful, we give this guide our highest recommendation.'
    },
    { 
      id: 10, 
      name: 'Z O', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f4/d0/default-avatar-2020-33.jpg?w=100&h=-1&s=1',
      rating: '5.0',
      text: 'Dami was a great guide -- he was very positive and informative. He also offered lots of good advice and suggestions!'
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
              Discover Sri Lanka with Ceylon D Tours <br/> safe, flexible, and unforgettable travel experiences.
            </p>
          </div>
          
          <div className="search-card">
            <div className="search-field">
              <svg className="search-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="search-input-group">
                <label>120 +</label>
                <input type="text" placeholder="Destinations" />
              </div>
            </div>
            
            <div className="search-divider"></div>
            
            <div className="navbar-actions">
              <a href="https://www.tripadvisor.com/Attraction_Review-g297896-d13293559-Reviews-Ceylon_D_Tours-Galle_Galle_District_Southern_Province.html" className="book-now-btn" target="_blank" rel="noopener noreferrer">
                Book Now
                <span className="infinity-icon">∞</span>
              </a>
            </div>
          
            
            <div className="search-divider"></div>
            
            <div className="search-field">
              <svg className="search-icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 8v6M23 11h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="search-input-group">
                <label>20k + </label>
                <input type="text" placeholder="Happy Travelers" />
              </div>
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
          
          <div className="destinations-grid">
            {popularDestinations.slice(currentCardPair * 2, currentCardPair * 2 + 2).map(dest => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>

          <div className="destinations-pagination">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`pagination-dot ${currentCardPair === index ? 'active' : ''}`}
                onClick={() => setCurrentCardPair(index)}
                aria-label={`Go to destination pair ${index + 1}`}
              />
            ))}
          </div>

          <Link to="/destinations" className="view-all-btn">All Destinations →</Link>

        </div>
      </section>
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <FeatureCard 
              icon={<img src={require('../img/shield-icon.png')} alt="Shield" />}
              title="Book With Confidence"
              description="We provide safe and reliable tour packages, secure bookings, and world-support that gets to know you."
            />
            <FeatureCard 
              icon={<img src={require('../img/smile-icon.png')} alt="Smile" />}
              title="Stress-free experience"
              description="We take care of all planning and booking to holiday planning, transport, accommodation for you."
            />
            <FeatureCard 
              icon={<img src={require('../img/lightning-icon.png')} alt="Lightning" />}
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
          
          <div className="testimonials-carousel">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={`testimonial-${index}`} className="testimonial-slide">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="contact-cta-banner">
        <div className="contact-cta-overlay">
          <div className="container">
            <h2 className="contact-cta-title">Get in Touch with Ceylon D Tour</h2>
            <p className="contact-cta-subtitle">
              Need Help Planning Your Sri Lanka Trip? Our Team Is Ready To Assist You—Contact Us Today!
            </p>
            <button className="contact-cta-btn">Ceylone D Tours</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
