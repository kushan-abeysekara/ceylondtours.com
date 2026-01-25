import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import DestinationCard from '../components/DestinationCard';
import TestimonialCard from '../components/TestimonialCard';
import FeatureCard from '../components/FeatureCard';
import MemoriesSection from '../components/MemoriesSection';
import { link } from 'node:fs';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCardPair, setCurrentCardPair] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const testimonialRef = React.useRef<HTMLDivElement>(null);

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
      description: 'Boburu Ella is a breathtaking waterfall near Ella, surrounded by thick forests and cool mountain air. It is an ideal place for nature lovers, photography enthusiasts, and travelers seeking peace, freshness, and scenic beauty.',
      link: '/destinations/bomburu-ella'
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
      description: 'Nine Arch Bridge is a famous historic railway bridge located in Ella, known for its impressive stone arches, lush green surroundings, and the magical experience of watching trains pass through the misty hills.',
      link: '/destinations/nine-arch-bridge'
    },
    { 
      id: 3, 
      image: [
        require('../img/Temple of the tooth 1.webp'),
        require('../img/kandy 1.webp'),
        require('../img/kandy 3.webp')
      ], 
      badge: 'Kandy',
      title: 'Discover Kandy',
      description: 'Kandy is a vibrant city known for its rich cultural heritage, beautiful temples, and scenic lake. It is a popular destination for those interested in history, spirituality, and traditional Sri Lankan culture.',
      link: '/destinations/kandy'
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
      description: 'Arugam Bay is a world-renowned surfing destination on Sri Lanka’s east coast, famous for long waves, laid-back beach culture, nearby wildlife spots, and stunning sunsets enjoyed by surfers and travelers from around the world.',
      link: '/destinations/arugam-bay'
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
      description: 'Sigiriya is an ancient rock fortress and UNESCO World Heritage Site, famous for its royal gardens, fresco paintings, mirror wall, and panoramic views from the summit, showcasing Sri Lanka’s rich history and culture.',
      link: '/destinations/sigiriya'
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
      description: 'Ella and Badulla are beautiful hill-country destinations offering cool weather, scenic train journeys, tea plantations, waterfalls, hiking trails, and peaceful mountain landscapes, making them perfect for relaxation, sightseeing, and adventure travel experiences.',
      link: '/destinations/ella'
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
      rating: '5/5',
      text: 'People that know me say I have travel a lot and in the case of Dami, for me it has been the Best professional that I have had, and furthermore the Best person, that has accompany me in my journeys. Thank you Dami, I wish you the Best in your New endeavour!'
    },
    { 
      id: 2, 
      name: 'Kitty F', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e8/24/default-avatar-2020-60.jpg?w=300&h=-1&s=1',
      rating: '5/5',
      text: 'Dami drove us for four days around the centre of Sri Lanka. We saw so much of the beautiful country and he taught us a lot about the culture and landscape whilst keeping us safe travelling through bumpy roads. He is great company, very efficient, thoughtful and always on time. We highly recommend Dami and will definitely be back to tour with him again in this very special place.'
    },
    { 
      id: 3, 
      name: 'Charlie D', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/6a/default-avatar-2020-47.jpg?w=300&h=-1&s=1',
      rating: '5/5',
      text: 'It was an amazing trip to Sri Lanka and a lot of that can be attributed to Dami. He went above and beyond to provide a great service and is very personable. 10/10 would recommend to anyone'
    },
    { 
      id: 4, 
      name: 'Julia D', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f1/42/default-avatar-2020-20.jpg?w=300&h=-1&s=1',
      rating: '5/5',
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
      rating: '5/5',
      text: 'We had a great trip over Sri Lanka in July with Dami: the best guide😍. His knowledge and amazing care is our best memory from this beatiful island🪷.'
    },
    { 
      id: 7, 
      name: 'Grace T', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e9/60/default-avatar-2020-64.jpg?w=200&h=-1&s=1',
      rating: '5/5',
      text: 'Dami is fantastic! He is so kind, caring and friendly and will go above and beyond to show you the best spots in Sri Lanka! He is so knowledgeable on Sri Lankan history and native flora and fauna. I’d recommend him to everyone!'
    },
    { 
      id: 8, 
      name: 'Benjamin L', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ea/b2/default-avatar-2020-69.jpg?w=200&h=-1&s=1',
      rating: '5/5',
      text: 'Daminda is not only the best and safest driver in Sri Lanka, he has also the best knowledge and contacts.He is a very understanding and calm person! We did a tour around the Island for almost one week with him and the experience could not have been any better.'
    },
    { 
      id: 9, 
      name: 'Peter L', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ea/b2/default-avatar-2020-69.jpg?w=200&h=-1&s=1',
      rating: '5/5',
      text: 'Absolutely excellent guide, excellent knowledge and conversation, entertaining, patient, thoughtful, we give this guide our highest recommendation.'
    },
    { 
      id: 10, 
      name: 'Z O', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f4/d0/default-avatar-2020-33.jpg?w=100&h=-1&s=1',
      rating: '5/5',
      text: 'Dami was a great guide -- he was very positive and informative. He also offered lots of good advice and suggestions!'
    }
  ];

  // Mouse drag handlers for testimonials
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (testimonialRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - testimonialRef.current.offsetLeft);
      setScrollLeft(testimonialRef.current.scrollLeft);
      testimonialRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (testimonialRef.current) {
      testimonialRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (testimonialRef.current) {
      testimonialRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !testimonialRef.current) return;
    e.preventDefault();
    const x = e.pageX - testimonialRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    testimonialRef.current.scrollLeft = scrollLeft - walk;
  };

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
              <a href="https://wa.me/94776266640" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://www.tripadvisor.com/Attraction_Review-g297896-d13293559-Reviews-Ceylon_D_Tours-Galle_Galle_District_Southern_Province.html" className="book-now-btn" target="_blank" rel="noopener noreferrer">
                Book Now
                <img src={require('../img/Booknow.png')} alt="Book Now" className="infinity-icon" style={{ width: '20px', height: '15px', filter: 'brightness(0) invert(1)' }} />
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
          
          <div 
            className="testimonials-carousel"
            ref={testimonialRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
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
