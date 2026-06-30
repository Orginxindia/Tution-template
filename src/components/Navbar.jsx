import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { showToast } from './Toast';

export default function Navbar({ onEnrollClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Auto-highlight active nav link on scroll
      const sections = ['home', 'about', 'courses', 'faculty', 'results', 'gallery', 'faq', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Explicitly disable dark theme and reset any existing flags
  useEffect(() => {
    document.body.classList.remove('dark-theme');
    localStorage.removeItem('theme');
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    document.body.style.overflow = '';
    
    const target = document.getElementById(sectionId);
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

  const toggleMobileMenu = () => {
    const newOpen = !isMenuOpen;
    setIsMenuOpen(newOpen);
    document.body.style.overflow = newOpen ? 'hidden' : '';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="container">
        <nav className="navbar">
          <a href="#home" className="logo-wrapper" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <img src={logo} alt="Wizard Tuition Centre Logo" className="logo-icon" />
            <div>
              <span className="logo-text">WIZARD</span>
              <span className="logo-tagline">Tuition Centre</span>
            </div>
          </a>
          
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#courses" className={`nav-link ${activeSection === 'courses' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('courses'); }}>
                Courses
              </a>
            </li>
            <li>
              <a href="#faculty" className={`nav-link ${activeSection === 'faculty' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('faculty'); }}>
                Faculty
              </a>
            </li>
            <li>
              <a href="#results" className={`nav-link ${activeSection === 'results' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('results'); }}>
                Reviews
              </a>
            </li>
            <li>
              <a href="#gallery" className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('gallery'); }}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#faq" className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                Contact
              </a>
            </li>
            {/* Removed mobile-only enroll button */}
          </ul>
          
          <div className="nav-actions">
            {/* Removed dark mode switcher option */}
            {/* Removed desktop-only enroll button */}
            
            <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
