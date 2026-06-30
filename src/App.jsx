import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { ToastContainer, showToast } from './components/Toast';

export default function App() {
  // Modals state
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [preSelectedCourse, setPreSelectedCourse] = useState('Primary-LKG-5th');
  
  // Floating scroll top btn visibility
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  // Form states
  const [admissionForm, setAdmissionForm] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    branch: 'bethaniyapuram',
    grade: 'Primary-LKG-5th',
    message: ''
  });

  const [careerForm, setCareerForm] = useState({
    name: '',
    phone: '',
    email: '',
    qualifications: '',
    experience: '',
    subjects: {
      math: false,
      acc: false,
      physics: false,
      english: false
    }
  });

  // Track scroll position for floating action widgets & scroll progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrollTopVisible(window.scrollY > 500);

      // Page scroll progress bar width calculation
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (totalHeight > 0) {
          const percentage = (window.scrollY / totalHeight) * 100;
          scrollProgress.style.width = percentage + '%';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global scroll reveal intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    const observeRevealElements = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        if (!el.classList.contains('active')) {
          observer.observe(el);
        }
      });
    };

    // Initial run
    observeRevealElements();

    // Since React filters can change elements, observe periodic mutations or DOM additions
    const mutationObserver = new MutationObserver(() => {
      observeRevealElements();
    });

    mutationObserver.observe(document.getElementById('root'), {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Handlers for modal opens
  const openEnrollmentModal = (courseName = '') => {
    if (courseName) {
      if (courseName.includes('Primary')) {
        setPreSelectedCourse('Primary-LKG-5th');
      } else if (courseName.includes('Secondary')) {
        setPreSelectedCourse('High-9th-10th');
      } else if (courseName.includes('Mathematics')) {
        setPreSelectedCourse('Higher-11th-12th');
      } else if (courseName.includes('Accountancy')) {
        setPreSelectedCourse('Higher-11th-12th');
      } else if (courseName.includes('NEET')) {
        setPreSelectedCourse('NEET-JEE');
      } else if (courseName.includes('Spoken')) {
        setPreSelectedCourse('Spoken-English');
      }
    }
    
    setAdmissionForm(prev => ({
      ...prev,
      grade: courseName ? (
        courseName.includes('Primary') ? 'Primary-LKG-5th' :
        courseName.includes('Secondary') ? 'High-9th-10th' :
        courseName.includes('Mathematics') || courseName.includes('Accountancy') ? 'Higher-11th-12th' :
        courseName.includes('NEET') ? 'NEET-JEE' : 'Spoken-English'
      ) : 'Primary-LKG-5th'
    }));

    setIsAdmissionOpen(true);
  };

  const handleAdmissionInputChange = (e) => {
    const { name, value } = e.target;
    setAdmissionForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    if (!admissionForm.studentName.trim() || admissionForm.phone.length < 10) {
      showToast('Please provide a student name and a valid 10-digit mobile number.', 'error');
      return;
    }

    setIsAdmissionOpen(false);
    showToast(`Registration request received for ${admissionForm.studentName} at our ${admissionForm.branch} branch. A coordinator will call you shortly.`, 'success');
    
    // Reset form
    setAdmissionForm({
      studentName: '',
      parentName: '',
      phone: '',
      branch: 'bethaniyapuram',
      grade: 'Primary-LKG-5th',
      message: ''
    });
  };

  const handleCareerInputChange = (e) => {
    const { name, value } = e.target;
    setCareerForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCareerSubjectChange = (e) => {
    const { name, checked } = e.target;
    setCareerForm(prev => ({
      ...prev,
      subjects: {
        ...prev.subjects,
        [name]: checked
      }
    }));
  };

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    
    const subjectList = Object.keys(careerForm.subjects).filter(s => careerForm.subjects[s]);
    if (subjectList.length === 0) {
      showToast('Please select at least one subject to teach.', 'error');
      return;
    }

    if (!careerForm.name.trim() || careerForm.phone.length < 10) {
      showToast('Please enter your name and a valid 10-digit mobile number.', 'error');
      return;
    }

    setIsCareerOpen(false);
    showToast(`Application submitted! Thank you Mr./Ms. ${careerForm.name}. Our academic board will review your qualifications shortly.`, 'success');
    
    // Reset form
    setCareerForm({
      name: '',
      phone: '',
      email: '',
      qualifications: '',
      experience: '',
      subjects: {
        math: false,
        acc: false,
        physics: false,
        english: false
      }
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Toast notifications */}
      <ToastContainer />

      {/* Top Bar Ribbon matching template */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="top-bar-highlight">Recruiting</span> We are looking for passionate Mathematics & Accountancy Tutors.
          </div>
          <div className="top-bar-right">
            <a href="#career" onClick={(e) => { e.preventDefault(); setIsCareerOpen(true); }} className="top-bar-link">
              <i className="fa-solid fa-briefcase"></i> Join Our Team
            </a>
            <span className="top-bar-sep">|</span>
            <a href="https://wa.me/917904723536" target="_blank" rel="noopener noreferrer" className="top-bar-link">
              <i className="fa-brands fa-whatsapp"></i> Chat Support
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <Navbar onEnrollClick={() => openEnrollmentModal()} />

      {/* Main content sections */}
      <main style={{ marginTop: '0' }}>
        <Hero onEnrollClick={() => openEnrollmentModal()} />
        <Stats />
        <About />

        {/* Marquee Divider Ribbon matching template */}
        <div className="marquee-ribbon">
          <div className="marquee-content">
            <span>★ INNOVATION</span>
            <span>★ WORLDWIDE LEARNERS</span>
            <span>★ UNIQUE KNOWLEDGE</span>
            <span>★ DREAM TODAY</span>
            <span>★ INSPIRE. TEACH. EMPOWER.</span>
            <span>★ INNOVATION</span>
            <span>★ WORLDWIDE LEARNERS</span>
            <span>★ UNIQUE KNOWLEDGE</span>
            <span>★ DREAM TODAY</span>
            <span>★ INSPIRE. TEACH. EMPOWER.</span>
          </div>
        </div>

        <Courses onEnrollClick={(courseName) => openEnrollmentModal(courseName)} />
        <Faculty />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Widgets */}
      <div className="floating-widgets">
        <a 
          href="https://wa.me/917904723536" 
          className="whatsapp-float-btn" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <button 
          className={`scroll-top-btn ${isScrollTopVisible ? 'visible' : ''}`}
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>

      {/* Enrollment Admission Modal */}
      <Modal isOpen={isAdmissionOpen} onClose={() => setIsAdmissionOpen(false)}>
        <h3 className="contact-form-title">Student Registration</h3>
        <p className="contact-form-desc" style={{ marginBottom: '1.5rem' }}>
          Schedule a free 2-day demo class at your nearest Madurai branch center.
        </p>
        
        <form onSubmit={handleAdmissionSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Student Full Name</label>
              <input 
                type="text" 
                name="studentName"
                className="form-control" 
                placeholder="e.g. K. Adithya"
                value={admissionForm.studentName}
                onChange={handleAdmissionInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Parent / Guardian Name</label>
              <input 
                type="text" 
                name="parentName"
                className="form-control" 
                placeholder="e.g. Mr. Krishnan"
                value={admissionForm.parentName}
                onChange={handleAdmissionInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Parent Mobile Number</label>
              <input 
                type="tel" 
                name="phone"
                className="form-control" 
                placeholder="e.g. 7904723536"
                value={admissionForm.phone}
                onChange={handleAdmissionInputChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit mobile number"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Preferred Branch Location</label>
              <select 
                name="branch" 
                className="form-control"
                value={admissionForm.branch}
                onChange={handleAdmissionInputChange}
              >
                <option value="bethaniyapuram">Bethaniyapuram (Main Landmark Campus)</option>
                <option value="vilangudi">New Vilangudi Campus</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Standard Class Grade</label>
              <select 
                name="grade" 
                className="form-control"
                value={admissionForm.grade}
                onChange={handleAdmissionInputChange}
              >
                <option value="Primary-LKG-5th">Primary School (LKG - 5th)</option>
                <option value="Middle-6th-8th">Middle School (6th - 8th)</option>
                <option value="High-9th-10th">Secondary Foundation (9th - 10th)</option>
                <option value="Higher-11th-12th">HSC board exam preparation</option>
                <option value="NEET-JEE">NEET / JEE Crash Prep</option>
                <option value="Spoken-English">Spoken English Skills</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Specific Subject/Timings Request (Optional)</label>
              <textarea 
                name="message" 
                className="form-control" 
                rows="2" 
                placeholder="e.g. Needs specialized physics tutoring help..."
                value={admissionForm.message}
                onChange={handleAdmissionInputChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
              Confirm Demo Registration
            </button>
          </div>
        </form>
      </Modal>

      {/* Career Application Modal */}
      <Modal isOpen={isCareerOpen} onClose={() => setIsCareerOpen(false)}>
        <h3 className="contact-form-title">Tutor Application</h3>
        <p className="contact-form-desc" style={{ marginBottom: '1.5rem' }}>
          Join our tutoring family. We require educators with high subject competency.
        </p>
        
        <form onSubmit={handleCareerSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="e.g. Dr. Ramesh Kumar"
                value={careerForm.name}
                onChange={handleCareerInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mobile Helpline</label>
              <input 
                type="tel" 
                name="phone"
                className="form-control" 
                placeholder="e.g. 9876543210"
                value={careerForm.phone}
                onChange={handleCareerInputChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit mobile number"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email ID</label>
              <input 
                type="email" 
                name="email"
                className="form-control" 
                placeholder="e.g. ramesh@gmail.com"
                value={careerForm.email}
                onChange={handleCareerInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Highest Degree Qualification</label>
              <input 
                type="text" 
                name="qualifications"
                className="form-control" 
                placeholder="e.g. M.Sc. in Mathematics, B.Ed."
                value={careerForm.qualifications}
                onChange={handleCareerInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Teaching Experience (Years)</label>
              <input 
                type="number" 
                name="experience"
                className="form-control" 
                placeholder="e.g. 5"
                min="0"
                value={careerForm.experience}
                onChange={handleCareerInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Target Teaching Subjects (Select All)</label>
              <div className="form-checkbox-group">
                <label className="checkbox-btn">
                  <input 
                    type="checkbox" 
                    name="math" 
                    checked={careerForm.subjects.math}
                    onChange={handleCareerSubjectChange}
                  />
                  <span>Mathematics</span>
                </label>
                
                <label className="checkbox-btn">
                  <input 
                    type="checkbox" 
                    name="acc" 
                    checked={careerForm.subjects.acc}
                    onChange={handleCareerSubjectChange}
                  />
                  <span>Accountancy</span>
                </label>

                <label className="checkbox-btn">
                  <input 
                    type="checkbox" 
                    name="physics" 
                    checked={careerForm.subjects.physics}
                    onChange={handleCareerSubjectChange}
                  />
                  <span>Physics (NEET)</span>
                </label>

                <label className="checkbox-btn">
                  <input 
                    type="checkbox" 
                    name="english" 
                    checked={careerForm.subjects.english}
                    onChange={handleCareerSubjectChange}
                  />
                  <span>Spoken English</span>
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '0.75rem' }}>
              Submit Teaching Profile
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
