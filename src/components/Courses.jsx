import React, { useState } from 'react';

// Unsplash photography URLs
const SUBJECT_PRIMARY = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80";
const SUBJECT_SECONDARY = "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80";
const SUBJECT_MATH = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80";
const SUBJECT_ACCOUNTANCY = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80";
const SUBJECT_NEET = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80";
const SUBJECT_ENGLISH = "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80";

const TUTOR_VIJAYAPATHI = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80";
const TUTOR_PRIYA = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80";
const TUTOR_RAJESH = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80";
const TUTOR_MEERA = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80";

const COURSES_DATA = [
  {
    id: 1,
    category: 'school',
    banner: SUBJECT_PRIMARY,
    type: 'School Foundation',
    title: 'Primary & Middle School (LKG - 8th)',
    rating: '4.8',
    reviews: '92',
    lessons: '12 Chapters',
    price: 'Free Demo',
    tutorImg: TUTOR_VIJAYAPATHI,
    tutorName: 'Mr. A. Vijayapathi',
    features: ['Homework completion support', 'Basic Math logic tests', 'Activity-based learning'],
    syllabus: ['Early Math Logic', 'Phonics & Grammar', 'Basic Science Diagrams']
  },
  {
    id: 2,
    category: 'school',
    banner: SUBJECT_SECONDARY,
    type: 'High School Core',
    title: 'Secondary Foundation (9th & 10th)',
    rating: '4.9',
    reviews: '140',
    lessons: '16 Chapters',
    price: 'Free Demo',
    tutorImg: TUTOR_RAJESH,
    tutorName: 'Mr. K. Rajesh',
    features: ['CBSE & State Board syllabus', 'Weekly mock tests', 'Formula checklists'],
    syllabus: ['Algebra & Linear Equations', 'Force & Motion Equations', 'Periodic Table Basics']
  },
  {
    id: 3,
    category: 'board',
    banner: SUBJECT_MATH,
    type: 'HSC Core',
    title: 'Mathematics Mastery (11th & 12th)',
    rating: '5.0',
    reviews: '210',
    lessons: '22 Chapters',
    price: 'Free Demo',
    tutorImg: TUTOR_VIJAYAPATHI,
    tutorName: 'Mr. A. Vijayapathi',
    features: ['Formula memory matrices', '10-year question banks', 'Doubt clearing slots'],
    syllabus: ['Limits & Derivatives', 'Vectors & 3D Geometry', 'Integral Calculus Hacks']
  },
  {
    id: 4,
    category: 'board',
    banner: SUBJECT_ACCOUNTANCY,
    type: 'HSC Commerce',
    title: 'Accountancy Essentials (11th & 12th)',
    rating: '4.9',
    reviews: '175',
    lessons: '18 Chapters',
    price: 'Free Demo',
    tutorImg: TUTOR_PRIYA,
    tutorName: 'Mrs. R. Priya',
    features: ['Ledger entry sheets', 'Speed solving board hacks', 'Balance sheet checklists'],
    syllabus: ['Double Entry Bookkeeping', 'Company Accounts Basics', 'Partnership Reconstitution']
  },
  {
    id: 5,
    category: 'coaching',
    banner: SUBJECT_NEET,
    type: 'Medical/Engineering',
    title: 'NEET / JEE Prep Crash Courses',
    rating: '4.8',
    reviews: '85',
    lessons: '24 Chapters',
    price: 'Free Demo',
    tutorImg: TUTOR_RAJESH,
    tutorName: 'Mr. K. Rajesh',
    features: ['Mock trials with OMR sheets', 'Speed calculation hacks', 'Physics formulas matrices'],
    syllabus: ['Kinematics & Optics MCQs', 'Organic Mechanics Equations', 'Cell Structure & Genetics']
  },
  {
    id: 6,
    category: 'english',
    banner: SUBJECT_ENGLISH,
    type: 'Skill Development',
    title: 'Spoken English & Grammar Skills',
    rating: '4.7',
    reviews: '64',
    lessons: '10 Chapters',
    price: 'Free Demo',
    tutorImg: TUTOR_MEERA,
    tutorName: 'Ms. S. Meera',
    features: ['Conversation training', 'Public speaking activities', 'Pronunciation keys'],
    syllabus: ['Parts of Speech Mastery', 'Tense & Verb Conjugation', 'Public Speaking Practice']
  }
];

export default function Courses({ onEnrollClick }) {
  const [filter, setFilter] = useState('all');
  const [openSyllabusId, setOpenSyllabusId] = useState(null);

  const toggleSyllabus = (id) => {
    setOpenSyllabusId(openSyllabusId === id ? null : id);
  };

  const filteredCourses = filter === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(course => course.category === filter);

  const getThemeClass = (category) => {
    switch (category) {
      case 'school': return 'school-foundation';
      case 'board': return 'hsc-boards';
      case 'coaching': return 'competitive-prep';
      case 'english': return 'spoken-english';
      default: return '';
    }
  };

  return (
    <section className="courses section-padding reveal reveal-up" id="courses">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="badge badge-primary">• OUR COURSES</span>
          <h2 className="section-title">Our Courses – Comprehensive <br /><span className="italic">Available all programs</span></h2>
          <p className="section-subtitle">Stretching from primary concepts to advanced board exams and competitive mock test setups.</p>
        </div>

        {/* Filters */}
        <div className="courses-filter">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All Categories
          </button>
          <button className={`filter-btn ${filter === 'school' ? 'active' : ''}`} onClick={() => setFilter('school')}>
            School Foundation
          </button>
          <button className={`filter-btn ${filter === 'board' ? 'active' : ''}`} onClick={() => setFilter('board')}>
            HSC Specialties
          </button>
          <button className={`filter-btn ${filter === 'coaching' ? 'active' : ''}`} onClick={() => setFilter('coaching')}>
            NEET / JEE Prep
          </button>
          <button className={`filter-btn ${filter === 'english' ? 'active' : ''}`} onClick={() => setFilter('english')}>
            Language Skills
          </button>
        </div>

        {/* Grid */}
        <div className="courses-grid">
          {filteredCourses.map(course => (
            <div key={course.id} className={`course-card ${getThemeClass(course.category)}`}>
              <div className="course-banner-container" style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
                <img src={course.banner} alt={course.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="course-price-badge" style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'var(--accent)',
                  color: 'var(--primary-dark)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: '800',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {course.price}
                </span>
              </div>

              <div className="course-card-header" style={{ padding: '1.5rem 1.75rem 0.75rem 1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="course-category" style={{ margin: '0' }}>{course.type}</span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#ffb300' }}>
                    <i className="fa-solid fa-star"></i>
                    <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>{course.rating}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>({course.reviews})</span>
                  </div>
                </div>

                <h3 className="course-title" style={{ fontSize: '1.2rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>{course.title}</h3>
                
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  <span><i className="fa-regular fa-file-lines" style={{ marginRight: '0.25rem' }}></i> {course.lessons}</span>
                  <span><i className="fa-regular fa-clock" style={{ marginRight: '0.25rem' }}></i> Free Demo</span>
                </div>
              </div>
              
              <div className="course-card-body" style={{ padding: '0 1.75rem 1.5rem 1.75rem' }}>
                <p className="course-desc" style={{ marginBottom: '1rem', fontSize: '0.8rem' }}>{course.description}</p>
                <div className="course-features" style={{ gap: '0.4rem' }}>
                  {course.features.map((feat, index) => (
                    <div key={index} className="course-feat-item" style={{ fontSize: '0.75rem' }}>
                      <i className="fa-solid fa-circle-check"></i>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Syllabus Collapsible Drawer */}
              <div className="course-syllabus-drawer" style={{ padding: '1rem 1.75rem' }}>
                <button 
                  className={`syllabus-toggle-btn ${openSyllabusId === course.id ? 'open' : ''}`} 
                  onClick={() => toggleSyllabus(course.id)}
                >
                  <span>{openSyllabusId === course.id ? 'Hide Syllabus' : 'View Syllabus'}</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div className={`syllabus-content ${openSyllabusId === course.id ? 'open' : ''}`}>
                  <ul className="syllabus-list">
                    {course.syllabus.map((item, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-angle-right"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="course-card-footer" style={{ padding: '1.25rem 1.75rem', borderTop: '1px solid var(--card-border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <img src={course.tutorImg} alt={course.tutorName} style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--card-border)' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-main)' }}>{course.tutorName}</span>
                </div>
                <a href="#admission" className="course-cta-link" style={{ fontSize: '0.85rem' }} onClick={(e) => { e.preventDefault(); onEnrollClick(course.title); }}>
                  Apply &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
