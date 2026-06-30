import React, { useState } from 'react';

// Unsplash URL for real teaching image
const REAL_TEACHING_IMAGE = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80";

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="about section-padding reveal reveal-up" id="about">
      <div className="container">
        <div className="about-wrapper">
          {/* Circular overlap collage frame */}
          <div className="about-image-column">
            <div className="about-collage-container">
              <div className="about-collage-deco"></div>
              <div className="about-collage-main">
                <img src={REAL_TEACHING_IMAGE} alt="Teacher explaining concept on board" />
              </div>
              <div className="about-collage-accent">
                <span className="accent-num">8+</span>
                <span className="accent-txt">Years Exp</span>
              </div>
            </div>
          </div>
          
          <div className="about-content-column" style={{ position: 'relative' }}>
            <span className="badge badge-primary">• ABOUT US</span>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              Who We Are – Introduction to <br />
              <span className="italic">Wizard Online Platform</span>
            </h2>
            
            <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Wizard Tuition Centre is the ultimate destination for conceptual school preparation, building student clarity, logic, and core subject proficiency.
            </p>
            
            {/* Checked items list */}
            <div className="about-checked-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
              <div className="checked-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-dark)', fontSize: '1.1rem' }}></i>
                <span>Innovative Learning System</span>
              </div>
              <div className="checked-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: '700' }}>
                <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-dark)', fontSize: '1.1rem' }}></i>
                <span>Worldwide Intelligent Learners</span>
              </div>
            </div>

            {/* Staggered Stats row */}
            <div className="about-stats-row" style={{ display: 'flex', gap: '3rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>30+</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Expert and Professional <br />tutors in Madurai</p>
              </div>
              <div>
                <h4 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>6k+</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enrolled Students <br />across our branches</p>
              </div>
            </div>

            {/* Tabs details */}
            <div className="mission-vision-tabs" style={{ marginBottom: '2rem' }}>
              <div className="tabs-header">
                <button className={`tab-btn ${activeTab === 'mission' ? 'active' : ''}`} onClick={() => setActiveTab('mission')}>
                  Our Mission
                </button>
                <button className={`tab-btn ${activeTab === 'vision' ? 'active' : ''}`} onClick={() => setActiveTab('vision')}>
                  Our Vision
                </button>
              </div>
              
              <div className="tabs-content">
                <div className={`tab-pane ${activeTab === 'mission' ? 'active' : ''}`}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    To simplify complex academic concepts and support students in building deep, logical foundations in Mathematics and Accountancy batches.
                  </p>
                </div>
                <div className={`tab-pane ${activeTab === 'vision' ? 'active' : ''}`}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    To establish Wizard as the premier local brand for board preparation excellence and self-reliant conceptual mastery in Madurai.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <button className="btn btn-primary">
                MORE ABOUT &gt;
              </button>
              
              {/* Founder quote signature */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="founder-signature" style={{ fontSize: '1.15rem', color: 'var(--secondary)' }}>Vijayapathi A</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Founder & Director</span>
              </div>
            </div>

            {/* Floating books stack */}
            <div className="floating-books">
              <svg width="90" height="90" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Book 1 (Blue) */}
                <path d="M20 70 L80 70 L75 80 L15 80 Z" fill="#2563eb" />
                <path d="M80 70 L80 75 L75 80 L75 75 Z" fill="#1d4ed8" />
                <path d="M15 80 L75 80 L75 83 L15 83 Z" fill="#e2e8f0" />
                
                {/* Book 2 (Green) */}
                <path d="M25 55 L85 55 L80 65 L20 65 Z" fill="#00ff2b" />
                <path d="M85 55 L85 60 L80 65 L80 60 Z" fill="#00b31e" />
                <path d="M20 65 L80 65 L80 68 L20 68 Z" fill="#e2e8f0" />
                
                {/* Book 3 (Purple) */}
                <path d="M30 40 L90 40 L85 50 L25 50 Z" fill="#7c3aed" />
                <path d="M90 40 L90 45 L85 50 L85 45 Z" fill="#5b21b6" />
                <path d="M25 50 L85 50 L85 53 L25 53 Z" fill="#e2e8f0" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
