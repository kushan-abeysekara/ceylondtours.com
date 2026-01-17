import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Top CTA Section */}
      <div className="footer-cta">
        <div className="footer-cta-container">
          <div className="footer-cta-icon left">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 10c-5 0-9 4-9 9 0 5 9 15 9 15s9-10 9-15c0-5-4-9-9-9zm0 12c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          <div className="footer-cta-content">
            <p className="footer-cta-text">Don't Know Which Destination To Choose?</p>
            <a href="tel:+94858577-3477" className="footer-cta-phone">Call Us (858) 577-3477</a>
          </div>
          <div className="footer-cta-icon right">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M45 25c0-8-6-15-15-15s-15 7-15 15c0 3 1 6 3 8l-3 12 12-3c2 1 5 2 8 2 8 0 15-7 15-15z" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <h3 className="footer-logo">Ceylon D Tour</h3>
              <p className="footer-description">
                Ceylon D Tour offers unforgettable Sri Lanka travel experiences with trusted service, 
                beautiful destinations, and personalized tour packages.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="https://instagram.com" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 0C7.284 0 6.944.012 5.877.06 4.813.11 4.086.278 3.45.525a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 00.525 3.45C.278 4.086.11 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.05 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.415 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.05 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.415-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.05-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0016.55.525C15.914.278 15.187.11 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.986.01 4.04.058.975.045 1.504.207 1.857.344.467.181.8.398 1.15.748.35.35.567.683.748 1.15.137.353.3.882.344 1.857.048 1.054.058 1.37.058 4.04 0 2.67-.01 2.986-.058 4.04-.045.975-.207 1.504-.344 1.857-.181.467-.398.8-.748 1.15-.35.35-.683.567-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058-2.67 0-2.986-.01-4.04-.058-.975-.045-1.504-.207-1.857-.344a3.097 3.097 0 01-1.15-.748 3.097 3.097 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.054-.058-1.37-.058-4.04 0-2.67.01-2.986.058-4.04.045-.975.207-1.504.344-1.857.181-.467.398-.8.748-1.15.35-.35.683-.567 1.15-.748.353-.137.882-.3 1.857-.344 1.054-.048 1.37-.058 4.04-.058z"/>
                    <path d="M10 13.333A3.333 3.333 0 1110 6.667a3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zM16.538 4.662a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                  </svg>
                </a>
                <a href="https://youtube.com" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M19.615 5.481a2.51 2.51 0 00-1.768-1.768C16.282 3.333 10 3.333 10 3.333s-6.282 0-7.847.38a2.51 2.51 0 00-1.768 1.768C0 7.046 0 10 0 10s0 2.954.385 4.519a2.51 2.51 0 001.768 1.768c1.565.38 7.847.38 7.847.38s6.282 0 7.847-.38a2.51 2.51 0 001.768-1.768C20 12.954 20 10 20 10s0-2.954-.385-4.519zM8 12.667V7.333L13.333 10 8 12.667z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Useful Links</h4>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Travel Blog</a></li>
                <li><a href="/partner">Become Partner</a></li>
                <li><a href="/faq">F.A.Q.</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact">
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="tel:+94896675-9493">(896) 675-9493</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.667 2.667h10.666c.734 0 1.334.6 1.334 1.333v8c0 .733-.6 1.333-1.334 1.333H2.667c-.734 0-1.334-.6-1.334-1.333V4c0-.733.6-1.333 1.334-1.333z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.667 4L8 8.667 1.333 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <a href="mailto:micivartz@icloud.com">micivartz@icloud.com</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M14 6.667C14 11.333 8 15.333 8 15.333S2 11.333 2 6.667C2 5.07 2.632 3.54 3.757 2.415 4.883 1.29 6.41.667 8 .667s3.117.623 4.243 1.748C13.368 3.54 14 5.07 14 6.667z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8.667a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>43 W. Wellington Road Fairhope, AL 36532</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p className="footer-copyright">
            ©Copyright Travel Agency {new Date().getFullYear()}. Design by Figma.guru
            <span className="footer-heart">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
