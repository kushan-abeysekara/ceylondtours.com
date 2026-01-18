import React, { useState, useEffect } from 'react';
import './Contact.css';
import ContactInfoCard from '../components/ContactInfoCard';

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      country: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Phone',
      info: ['(358) 707-4989', '(863) 267-3534']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Address',
      info: ['7914 Lees Creek St. Dayton, OH 45420', '8911 Tanglewood Ave. Capitol Heights, MD 20743']
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Email',
      info: ['rhavyn@outlook.com', 'natiannae@msn.com']
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1 className="contact-hero-title">Contact Us</h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="contact-form-image">
              <div className="contact-form-image-content">
                <div className="airplane-icon">✈️</div>
                <h3 className="contact-form-image-title">
                  Don't Know Which Destination To Choose?
                </h3>
                <p className="contact-form-image-subtitle">We can help you</p>
                <button className="view-details-btn">View Details</button>
              </div>
            </div>

            <div className="contact-form-container">
              <h2 className="contact-form-title">Contact Us</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
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

export default Contact;
