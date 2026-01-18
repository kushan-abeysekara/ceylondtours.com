import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Ceylon D Tour
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="navbar-item">
            <a href="https://www.tripadvisor.com/Attraction_Review-g297896-d13293559-Reviews-Ceylon_D_Tours-Galle_Galle_District_Southern_Province.html" className="navbar-link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Tours</a>
          </li>
          <li className="navbar-item">
            <Link to="/destinations" className={`navbar-link ${isActive('/destinations') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Destination</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className={`navbar-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="search-icon" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a href="https://www.tripadvisor.com/Attraction_Review-g297896-d13293559-Reviews-Ceylon_D_Tours-Galle_Galle_District_Southern_Province.html" className="book-now-btn" target="_blank" rel="noopener noreferrer">
            Book Now
            <span className="infinity-icon">∞</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
