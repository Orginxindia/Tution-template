import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { showToast } from './Toast';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    showToast(`Success! Worksheets and tips will be sent to ${email} weekly.`, 'success');
    setEmail('');
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div className="footer-col">
            <a href="#home" className="logo-wrapper" style={{ marginBottom: '1.5rem' }} onClick={(e) => handleLinkClick(e, 'home')}>
              <img src={logo} alt="Wizard Tuition Centre Logo" className="logo-icon" />
              <div>
                <span className="logo-text" style={{ color: 'white' }}>WIZARD</span>
                <span className="logo-tagline" style={{ color: 'rgba(255,255,255,0.6)' }}>Tuition Centre</span>
              </div>
            </a>
            <p className="footer-desc">
              Simplifying curriculum concepts and empowering academic performance for students in Madurai. Quality tutoring for LKG to 12th standard (CBSE, State Board, ICSE).
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home Base</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Us</a></li>
              <li><a href="#courses" onClick={(e) => handleLinkClick(e, 'courses')}>Tuition Courses</a></li>
              <li><a href="#faculty" onClick={(e) => handleLinkClick(e, 'faculty')}>Teacher Profiles</a></li>
              <li><a href="#results" onClick={(e) => handleLinkClick(e, 'results')}>Results & Reviews</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact Channels</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h3>Contact Details</h3>
            <ul className="footer-links" style={{ gap: '1rem' }}>
              <li>
                <i className="fa-solid fa-phone" style={{ marginRight: '0.5rem', color: 'var(--secondary-light)' }}></i>
                +91 7904723536
              </li>
              <li>
                <i className="fa-solid fa-location-dot" style={{ marginRight: '0.5rem', color: 'var(--secondary-light)' }}></i>
                Bethaniyapuram / New Vilangudi, Madurai, Tamil Nadu
              </li>
              <li>
                <i className="fa-solid fa-envelope" style={{ marginRight: '0.5rem', color: 'var(--secondary-light)' }}></i>
                info@wizardtuition.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h3>Weekly Worksheet tips</h3>
            <p className="footer-desc" style={{ marginBottom: '1.25rem' }}>
              Subscribe to get free Mathematics worksheets and Spoken English checklists sent to your inbox:
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <div className="newsletter-input-group">
                <input 
                  type="email" 
                  placeholder="Parent / Student Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" aria-label="Subscribe">
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Wizard Tuition Centre. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="social-link" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" className="social-link" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            <a href="https://wa.me/917904723536" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
