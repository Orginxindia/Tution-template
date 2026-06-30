import React, { useState, useEffect, useRef } from 'react';

// Unsplash portrait avatar images for reviewers
const REVIEWER_1 = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80";
const REVIEWER_2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80";
const REVIEWER_3 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80";
const REVIEWER_4 = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80";

const GOOGLE_REVIEWS = [
  {
    id: 1,
    avatar: REVIEWER_1,
    name: "Senthil Kumar",
    time: "2 weeks ago",
    rating: 5,
    text: "Wizard Tuition Centre is undoubtedly the best coaching center in Madurai for Mathematics. Vijayapathi sir explains complex algebra and calculus concepts step-by-step. My son scored 98% in his board exams under his guidance!"
  },
  {
    id: 2,
    avatar: REVIEWER_2,
    name: "Meenakshi Sundaram",
    time: "1 month ago",
    rating: 5,
    text: "Excellent learning atmosphere. The classrooms are fully air-conditioned and safety is assured with CCTV cameras. The teacher profiles are highly qualified and they conduct weekly mock tests regularly."
  },
  {
    id: 3,
    avatar: REVIEWER_3,
    name: "Dr. Anand Krishnan",
    time: "3 days ago",
    rating: 5,
    text: "Vijayapathi sir's approach to teaching NEET Physics and Maths is highly conceptual. Rather than memorizing formulas, students learn 'why' they work. The doubt clearance sessions on Saturdays have been immensely helpful."
  },
  {
    id: 4,
    avatar: REVIEWER_4,
    name: "Priyadarshini R",
    time: "3 weeks ago",
    rating: 5,
    text: "Best Accountancy coaching classes in Bethaniyapuram Vilangudi area. Priya mam covers the complete syllabus thoroughly and gives double-entry rule worksheets which make calculations super easy."
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideTimer = useRef(null);

  const resetAutoSlide = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
    autoSlideTimer.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % GOOGLE_REVIEWS.length);
    }, 6000);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    };
  }, []);

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % GOOGLE_REVIEWS.length);
    resetAutoSlide();
  };

  const handlePrev = () => {
    setCurrentSlide(prev => (prev - 1 + GOOGLE_REVIEWS.length) % GOOGLE_REVIEWS.length);
    resetAutoSlide();
  };

  const handleGoTo = (index) => {
    setCurrentSlide(index);
    resetAutoSlide();
  };

  return (
    <section className="testimonials section-padding" id="results">
      <div className="container">
        <div className="section-title-wrapper" style={{ marginBottom: '3.5rem' }}>
          <span className="badge badge-primary">Google Reviews</span>
          <h2 className="section-title">Google <span className="italic">Testimonials</span></h2>
          <p className="section-subtitle">Verified feedback from parents and students across our Madurai tuition branches.</p>
        </div>

        {/* Google Reviews Aggregated Ribbon */}
        <div className="google-badge-ribbon" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
          backgroundColor: 'var(--bg-surface)',
          padding: '1rem 2rem',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-sm)',
          border: '1.5px solid var(--border-light)',
          maxWidth: '520px',
          margin: '0 auto 3rem auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span style={{ fontWeight: '700', color: 'var(--text-main)', fontSize: '0.95rem' }}>Google Review Rating</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.25rem' }}>5.0</span>
            <div style={{ color: '#ffb300', fontSize: '0.95rem' }}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(42 Reviews)</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel-container">
          <div className="carousel-viewport">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {GOOGLE_REVIEWS.map(slide => (
                <div key={slide.id} className="carousel-slide">
                  <div className="testimonial-card" style={{ padding: '2.5rem', position: 'relative' }}>
                    
                    {/* Google Logo on Card */}
                    <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: '0.85' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>

                    <div className="test-student-col">
                      <div className="test-avatar-container" style={{ border: '2.5px solid var(--accent)' }}>
                        <img src={slide.avatar} alt={slide.name} className="test-avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <span className="test-score-badge" style={{
                        backgroundColor: 'rgba(0, 179, 30, 0.1)',
                        color: 'var(--accent-dark)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.7rem'
                      }}>
                        <i className="fa-solid fa-circle-check"></i> Verified Reviewer
                      </span>
                    </div>
                    
                    <div className="test-content-col">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '0.85rem' }}>
                        <div style={{ color: '#ffb300', fontSize: '0.85rem' }}>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{slide.time}</span>
                      </div>
                      
                      <p className="test-text" style={{ fontSize: '0.95rem', lineHeight: '1.6', fontStyle: 'normal' }}>
                        "{slide.text}"
                      </p>
                      
                      <h4 className="test-author" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>{slide.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-arrow" onClick={handlePrev} aria-label="Previous slide">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            
            <div className="carousel-indicators">
              {GOOGLE_REVIEWS.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => handleGoTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button className="carousel-arrow" onClick={handleNext} aria-label="Next slide">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
