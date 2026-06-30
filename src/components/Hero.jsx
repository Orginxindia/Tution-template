import React from 'react';

// Unsplash URLs for real graphics
const REAL_HERO_STUDENTS = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80";
const REAL_TUTOR_1 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80";
const REAL_TUTOR_2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80";
const REAL_TUTOR_3 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80";

export default function Hero({ onEnrollClick }) {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('courses');
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
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content reveal reveal-left">
            <div className="hero-tag">
              <span></span> ✓ 100% BOARD EXAM SUCCESS GUARANTEE
            </div>
            
            <h1 className="hero-title">
              Grow Up Your <br />
              <span className="italic-title">Academic Skills</span> <br />
              with Wizard
            </h1>
            
            <p className="hero-desc">
              Wizard Tuition Centre is the ultimate destination for conceptual school coaching, HSC board preparation, and specialized NEET/JEE learning in Madurai.
            </p>
            
            <div className="hero-ctas" style={{ marginBottom: '2rem' }}>
              <button className="btn btn-primary" onClick={onEnrollClick}>
                GET STARTED &gt;
              </button>
              <a href="#courses" className="btn btn-secondary" onClick={handleExploreClick} style={{ color: 'var(--text-main)', border: '1px solid var(--border-light)' }}>
                FIND COURSE &rarr;
              </a>
            </div>

            {/* Rating block */}
            <div className="hero-rating-block">
              <div className="hero-rating-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="hero-rating-text">
                <strong>4.9/5 Rating</strong> (800+ Students daily with Educate platform)
              </div>
            </div>
          </div>

          {/* Collage frame */}
          <div className="hero-graphic reveal reveal-right">
            <div className="hero-graphic-collage">
              <div className="hero-shape-bg"></div>
              <img src={REAL_HERO_STUDENTS} alt="Students studying together" className="hero-main-img" />
              
              <div className="hero-overlay-card">
                <div className="avatar-stack">
                  <img src={REAL_TUTOR_1} alt="Tutor Vijayapathi" />
                  <img src={REAL_TUTOR_2} alt="Tutor Priya" />
                  <img src={REAL_TUTOR_3} alt="Tutor Rajesh" />
                  <div className="avatar-stack-plus">+</div>
                </div>
                <div>
                  <h4 className="overlay-card-num">15+</h4>
                  <p className="overlay-card-txt">Expert Tutors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
