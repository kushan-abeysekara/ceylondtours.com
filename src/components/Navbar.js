import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Ceylon D Tour
        </Link>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/tours" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Tours</Link>
          </li>
          <li className="navbar-item">
            <Link to="/destination" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Destination</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="search-icon" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <Link to="/book" className="book-now-btn">
            Book Now
            <span className="infinity-icon">∞</span>
          </Link>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
