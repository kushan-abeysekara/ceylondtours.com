import React, { useEffect } from 'react';
import './Destinations.css';
import DestinationDetail from '../components/DestinationDetail';

const Destinations = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const destinations = [
    {
      id: 1,
      title: 'Discover Sigiriya',
      description: 'An ancient rock fortress and UNESCO World Heritage Site, famous for its frescoes, lion-shaped gateway, and breathtaking views from the summit.',
      features: [
        'Secure and protected travel costs',
        'Custom cultural tour plans to match your interests',
        'Well-organized and comfortable sightseeing experience'
      ],
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: false
    },
    {
      id: 2,
      title: 'Discover Nine Arch Bridge',
      description: 'A famous railway bridge surrounded by lush green hills and tea plantations. One of the most photogenic places in Sri Lanka, offering stunning panoramic views.',
      features: [
        'Safe and reliable travel arrangements',
        'Flexible sightseeing plans around Ella',
        'Relaxed and smooth travel experience'
      ],
      image: 'https://images.unsplash.com/photo-1588971550723-4c4ae923cdbb?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: true
    },
    {
      id: 3,
      title: 'Discover Arugam Bay',
      description: 'A world-famous beach destination known for surfing, golden sandy shores, and a relaxed coastal atmosphere on Sri Lanka\'s east coast.',
      features: [
        'Secure and well-planned travel coverage',
        'Custom surf and beach holiday options',
        'Easy, relaxed, and worry-free beach travel'
      ],
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏄', label: 'Surfing' }
      ],
      reverse: false
    },
    {
      id: 4,
      title: 'Discover Temple of the Tooth Relic',
      description: 'A sacred temple in Kandy that houses a relic of the tooth of Lord Buddha. It is one of the most important religious and cultural sites in Sri Lanka.',
      features: [
        'Trusted and secure travel arrangements',
        'Personalized cultural and religious tour options',
        'Peaceful, well-organized temple visit experience'
      ],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Days' },
        { icon: '🙏', label: 'Cultural' }
      ],
      reverse: true
    },
    {
      id: 5,
      title: 'Discover Bomburu Ella',
      description: 'One of the widest waterfalls in Sri Lanka, surrounded by misty hills, forests, and natural beauty near Nuwara Eliya.',
      features: [
        'Safe and well-managed travel plans',
        'Flexible nature tour options',
        'Calm and seamless waterfall experience'
      ],
      image: 'https://images.unsplash.com/photo-1580549239615-367449433e06?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: false
    }
  ];

  return (
    <div className="destinations-page">
      {/* Hero Section */}
      <section className="destinations-hero">
        <div className="destinations-hero-overlay">
          <h1 className="destinations-hero-title">Destinations</h1>
        </div>
      </section>

      {/* Destinations List */}
      <section className="destinations-list">
        <div className="destinations-container">
          {destinations.map(destination => (
            <DestinationDetail key={destination.id} {...destination} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
