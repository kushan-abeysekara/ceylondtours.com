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
      image: require('../img/destination_sigiriya.webp'),
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
      image: require('../img/destination_NineArch.webp'),
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
      image: require('../img/destination_Arugambay.webp'),
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
      image: require('../img/destination_templetoth relic.webp'),
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
      image: require('../img/destination_Boburuella.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: false
    },
    {
      id: 6,
      title: 'Discover Ella',
      description: 'A charming hill-country town surrounded by mountains, tea estates, and natural beauty, offering breathtaking views and outdoor adventures.',
      features: [
        'Comfortable hill-country travel plans',
        'Custom trekking and nature tours',
        'Peaceful and scenic travel experience'
      ],
      image: require('../img/destination_ella.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: true
    },
    {
      id: 7,
      title: 'Discover Kandy',
      description: 'A sacred city nestled in the hills, home to the Temple of the Tooth Relic, lush botanical gardens, and vibrant cultural heritage.',
      features: [
        'Safe and reliable cultural travel',
        'Flexible temple and city tour options',
        'Peaceful and enriching experience'
      ],
      image: require('../img/destination_kandy.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🙏', label: 'Cultural Tour' }
      ],
      reverse: false
    },
    {
      id: 8,
      title: 'Discover Nuwara Eliya',
      description: 'Known as "Little England," this cool climate town features tea plantations, colonial architecture, and stunning mountain scenery.',
      features: [
        'Comfortable hill-country travel',
        'Tea estate and nature tours',
        'Relaxed and scenic experience'
      ],
      image: require('../img/destination_nuwaraeliya.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: true
    },
    {
      id: 9,
      title: 'Discover Galle Fort',
      description: 'A historic colonial fortress blending Dutch architecture with tropical charm, offering coastal views, boutique shops, and cultural landmarks.',
      features: [
        'Safe and organized heritage tours',
        'Flexible walking and exploration plans',
        'Relaxed coastal experience'
      ],
      image: require('../img/destination_galle fort.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Days' },
        { icon: '🏛️', label: 'Heritage Tour' }
      ],
      reverse: false
    },
    {
      id: 10,
      title: 'Discover Yala National Park',
      description: 'Sri Lanka\'s most famous wildlife park, known for leopard sightings, elephants, and diverse wildlife in natural habitats.',
      features: [
        'Safe guided safari experiences',
        'Flexible safari schedules',
        'Thrilling wildlife adventure'
      ],
      image: require('../img/destination_yala.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🦁', label: 'Wildlife Safari' }
      ],
      reverse: true
    },
    {
      id: 11,
      title: 'Discover Mirissa',
      description: 'A stunning beach town famous for whale watching, golden sands, and crystal-clear waters perfect for relaxation.',
      features: [
        'Safe coastal travel arrangements',
        'Whale watching and beach activities',
        'Relaxing seaside experience'
      ],
      image: require('../img/destination_mirissa.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏖️', label: 'Beach & Leisure' }
      ],
      reverse: false
    },
    {
      id: 12,
      title: 'Discover Bentota',
      description: 'A popular beach destination with water sports, river safaris, and luxury resorts along pristine coastline.',
      features: [
        'Safe beach and water sports travel',
        'Flexible activity schedules',
        'Fun and relaxing experience'
      ],
      image: require('../img/destination_bentota.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏖️', label: 'Beach & Water Sports' }
      ],
      reverse: true
    },
    {
      id: 13,
      title: 'Discover Anuradhapura',
      description: 'An ancient capital featuring sacred Buddhist temples, massive stupas, and ruins dating back thousands of years.',
      features: [
        'Guided historical and spiritual tours',
        'Secure and organized temple visits',
        'Enriching cultural experience'
      ],
      image: require('../img/destination_anuradapura.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🙏', label: 'Ancient City Tour' }
      ],
      reverse: false
    },
    {
      id: 14,
      title: 'Discover Polonnaruwa',
      description: 'A medieval capital showcasing well-preserved ruins, Buddha statues, and ancient irrigation systems.',
      features: [
        'Organized archaeological tours',
        'Expert guided experiences',
        'Comfortable heritage exploration'
      ],
      image: require('../img/destination_polonnaruwa.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Days' },
        { icon: '🏛️', label: 'Historical Tour' }
      ],
      reverse: true
    },
    {
      id: 15,
      title: 'Discover Dambulla Cave Temple',
      description: 'A UNESCO World Heritage site featuring ancient cave temples with stunning Buddha statues and colorful murals.',
      features: [
        'Safe spiritual travel arrangements',
        'Guided temple tours',
        'Peaceful cultural experience'
      ],
      image: require('../img/destination_dambulla.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Days' },
        { icon: '🙏', label: 'Cultural Heritage' }
      ],
      reverse: false
    },
    {
      id: 16,
      title: 'Discover Horton Plains',
      description: 'A UNESCO World Heritage site offering misty plateaus, World\'s End cliff, and unique biodiversity.',
      features: [
        'Safe trekking experiences',
        'Nature-focused travel plans',
        'Breathtaking natural scenery'
      ],
      image: require('../img/destination_hortan.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Days' },
        { icon: '🥾', label: 'Nature Trekking' }
      ],
      reverse: true
    },
    {
      id: 17,
      title: 'Discover Adam\'s Peak',
      description: 'A sacred mountain and pilgrimage site offering spiritual significance and stunning sunrise views from the summit.',
      features: [
        'Guided pilgrimage experiences',
        'Safe mountain trekking',
        'Spiritual and scenic journey'
      ],
      image: require('../img/destination_adams peak.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '⛰️', label: 'Pilgrimage & Hiking' }
      ],
      reverse: false
    },
    {
      id: 18,
      title: 'Discover Trincomalee',
      description: 'A coastal city with pristine beaches, historic temples, and excellent diving spots along the eastern coast.',
      features: [
        'Safe coastal travel',
        'Beach and diving activities',
        'Relaxed seaside experience'
      ],
      image: require('../img/destination_trincomalee.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏖️', label: 'Beach & Diving' }
      ],
      reverse: true
    },
    {
      id: 19,
      title: 'Discover Hikkaduwa',
      description: 'A lively beach town famous for coral reefs, snorkeling, and vibrant nightlife.',
      features: [
        'Safe and reliable coastal travel arrangements',
        'Flexible beach and activity schedules',
        'Fun-filled and relaxing travel experience'
      ],
      image: require('../img/destination_Hikkaduwa.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏖️', label: 'Beach & Leisure' }
      ],
      reverse: false
    },
    {
      id: 20,
      title: 'Discover Udawalawe National Park',
      description: 'A renowned wildlife sanctuary best known for elephant sightings in natural habitats.',
      features: [
        'Safe and guided safari experiences',
        'Flexible safari schedules',
        'Smooth and comfortable travel'
      ],
      image: require('../img/destination_udawalawa.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🐘', label: 'Wildlife Safari' }
      ],
      reverse: true
    },
    {
      id: 21,
      title: 'Discover Kalpitiya',
      description: 'A peaceful coastal region famous for dolphin watching and kite surfing.',
      features: [
        'Eco-friendly travel options',
        'Adventure-based activities',
        'Relaxed and nature-focused experience'
      ],
      image: require('../img/destination_kalpitiya.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏖️', label: 'Beach & Adventure' }
      ],
      reverse: false
    },
    {
      id: 22,
      title: 'Discover Jaffna',
      description: 'A cultural city showcasing rich Tamil heritage, history, and traditions.',
      features: [
        'Cultural and heritage-focused travel',
        'Guided city exploration',
        'Comfortable travel arrangements'
      ],
      image: require('../img/destination_jaffna.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🙏', label: 'Cultural Tour' }
      ],
      reverse: true
    },
    {
      id: 23,
      title: 'Discover Knuckles Mountain Range',
      description: 'A breathtaking mountain range with misty peaks and scenic hiking trails.',
      features: [
        'Guided trekking experiences',
        'Nature-focused travel plans',
        'Calm and refreshing environment'
      ],
      image: require('../img/destination_knuckles.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🥾', label: 'Nature & Hiking' }
      ],
      reverse: false
    },
    {
      id: 24,
      title: 'Discover Kitulgala',
      description: 'Sri Lanka\'s adventure capital, famous for white-water rafting.',
      features: [
        'Safe adventure activities',
        'Professional guides',
        'Exciting and smooth travel experience'
      ],
      image: require('../img/destination_kithulgala.webp'),
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🚣', label: 'Adventure & Nature' }
      ],
      reverse: true
    },
    {
      id: 25,
      title: 'Discover Pasikuda',
      description: 'A calm shallow beach ideal for swimming and relaxation.',
      features: [
        'Comfortable beachside travel',
        'Family-friendly plans',
        'Peaceful and smooth experience'
      ],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏖️', label: 'Beach & Leisure' }
      ],
      reverse: false
    },
    {
      id: 26,
      title: 'Discover Negombo',
      description: 'A lively coastal town located close to the international airport.',
      features: [
        'Convenient travel arrangements',
        'Flexible short-stay plans',
        'Comfortable coastal experience'
      ],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Day' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: true
    },
    {
      id: 27,
      title: 'Discover Mahiyanganaya',
      description: 'An ancient settlement linked to Sri Lanka\'s indigenous Vedda culture.',
      features: [
        'Cultural heritage exploration',
        'Guided historical visits',
        'Smooth travel experience'
      ],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🙏', label: 'Cultural Tour' }
      ],
      reverse: false
    },
    {
      id: 28,
      title: 'Discover Ravana Falls',
      description: 'A famous waterfall connected to ancient legends and folklore.',
      features: [
        'Scenic travel routes',
        'Easy sightseeing access',
        'Relaxed travel experience'
      ],
      image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Day' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: true
    },
    {
      id: 29,
      title: 'Discover Pidurangala Rock',
      description: 'A scenic viewpoint offering panoramic views of Sigiriya Rock.',
      features: [
        'Guided hiking options',
        'Safe climbing experience',
        'Peaceful natural setting'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '1 Day' },
        { icon: '🥾', label: 'Hiking & Sightseeing' }
      ],
      reverse: false
    },
    {
      id: 30,
      title: 'Discover Sinharaja Forest',
      description: 'A UNESCO World Heritage tropical rainforest rich in biodiversity.',
      features: [
        'Eco-friendly travel plans',
        'Guided nature walks',
        'Calm and natural environment'
      ],
      image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🌳', label: 'Eco Tourism' }
      ],
      reverse: true
    },
    {
      id: 31,
      title: 'Discover Wilpattu National Park',
      description: 'A wildlife park famous for natural lakes and peaceful safaris.',
      features: [
        'Quiet safari experiences',
        'Professional wildlife guides',
        'Comfortable travel'
      ],
      image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🦁', label: 'Wildlife Safari' }
      ],
      reverse: false
    },
    {
      id: 32,
      title: 'Discover Batticaloa',
      description: 'A coastal city known for lagoons, beaches, and cultural charm.',
      features: [
        'Relaxed coastal travel',
        'Cultural sightseeing',
        'Smooth travel arrangements'
      ],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: true
    },
    {
      id: 33,
      title: 'Discover Badulla',
      description: 'A scenic hill-country town surrounded by waterfalls and greenery.',
      features: [
        'Comfortable hill travel',
        'Nature-focused sightseeing',
        'Peaceful experience'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: false
    },
    {
      id: 34,
      title: 'Discover Hatton',
      description: 'A tea estate town located near Adam\'s Peak.',
      features: [
        'Scenic hill-country travel',
        'Guided plantation visits',
        'Relaxed experience'
      ],
      image: 'https://images.unsplash.com/photo-1563968743333-044cef800494?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: true
    },
    {
      id: 35,
      title: 'Discover Matara',
      description: 'A southern coastal city with rich heritage and beautiful beaches.',
      features: [
        'Coastal sightseeing',
        'Cultural exploration',
        'Comfortable travel'
      ],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: false
    },
    {
      id: 36,
      title: 'Discover Hambantota',
      description: 'A developing southern city with modern attractions and natural beauty.',
      features: [
        'Smooth travel routes',
        'Leisure sightseeing',
        'Relaxed experience'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏛️', label: 'Sightseeing' }
      ],
      reverse: true
    },
    {
      id: 37,
      title: 'Discover Kataragama',
      description: 'A sacred pilgrimage town respected by multiple religions.',
      features: [
        'Organized pilgrimage travel',
        'Peaceful spiritual atmosphere',
        'Comfortable arrangements'
      ],
      image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🙏', label: 'Pilgrimage' }
      ],
      reverse: false
    },
    {
      id: 38,
      title: 'Discover Colombo',
      description: 'Sri Lanka\'s commercial capital blending modern life and colonial heritage.',
      features: [
        'Comfortable city travel',
        'Flexible sightseeing plans',
        'Smooth urban experience'
      ],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      icons: [
        { icon: '🚗', label: 'Land Trip' },
        { icon: '📅', label: '2 Days' },
        { icon: '🏙️', label: 'City Tour' }
      ],
      reverse: true
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
