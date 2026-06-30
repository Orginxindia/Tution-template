import React, { useState } from 'react';
import { showToast } from './Toast';

export default function Contact() {
  const [activeBranch, setActiveBranch] = useState('bethaniyapuram');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: 'Primary-LKG-5th',
    message: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    // Map html input ids to state keys
    const stateKey = id.replace('inq-', '');
    setFormData(prev => ({
      ...prev,
      [stateKey]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length < 10) {
      showToast('Please enter a valid name and 10-digit phone number.', 'error');
      return;
    }

    showToast(`Thank you, ${formData.name}! Your inquiry has been submitted. Our counselor will contact you at ${formData.phone} shortly.`, 'success');
    setFormData({
      name: '',
      phone: '',
      grade: 'Primary-LKG-5th',
      message: ''
    });
  };

  return (
    <section className="contact section-padding reveal reveal-up" id="contact">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="badge badge-primary">Get In Touch</span>
          <h2 className="section-title">Visit Our <span className="italic">Centres</span></h2>
          <p className="section-subtitle">Drop by for a discussion, enroll, or schedule a free demo class at one of our Madurai branches.</p>
        </div>

        <div className="contact-grid">
          {/* Information Column */}
          <div className="contact-info-col">
            <h3>Branch Locations</h3>
            <p className="text-muted" style={{ marginBottom: '1.5rem', fontSize: '0.85rem' }}>
              Select a branch to view coordinates, phone line, and schedules:
            </p>
            
            <div className="branch-selector">
              <button 
                className={`branch-tab-btn ${activeBranch === 'bethaniyapuram' ? 'active' : ''}`}
                onClick={() => setActiveBranch('bethaniyapuram')}
              >
                Bethaniyapuram (Main)
              </button>
              <button 
                className={`branch-tab-btn ${activeBranch === 'vilangudi' ? 'active' : ''}`}
                onClick={() => setActiveBranch('vilangudi')}
              >
                New Vilangudi Branch
              </button>
            </div>

            {/* Bethaniyapuram Branch Panel */}
            <div className={`branch-details-panel ${activeBranch === 'bethaniyapuram' ? 'active' : ''}`}>
              <div className="contact-details-list">
                <div className="contact-details-item">
                  <div className="contact-icon-box"><i className="fa-solid fa-location-dot"></i></div>
                  <div className="contact-text-box">
                    <h4>Location Address</h4>
                    <p>12, Main Road, Bethaniyapuram,<br />Madurai - 625016 (Near Vilangudi Landmark)</p>
                  </div>
                </div>
                
                <div className="contact-details-item">
                  <div className="contact-icon-box"><i className="fa-solid fa-phone"></i></div>
                  <div className="contact-text-box">
                    <h4>Contact Helpline</h4>
                    <p>+91 7904723536</p>
                  </div>
                </div>

                <div className="contact-details-item">
                  <div className="contact-icon-box"><i className="fa-solid fa-clock"></i></div>
                  <div className="contact-text-box">
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 4:30 PM - 8:30 PM<br />Sunday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Dynamic Google Maps iframe */}
              <div className="map-mock-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', height: '260px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0894089901726!2d78.0963503!3d9.9264503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfdc7a187313%3A0xb366c8f94d930263!2sBethaniyapuram%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bethaniyapuram Branch Map"
                ></iframe>
              </div>
            </div>

            {/* Vilangudi Branch Panel */}
            <div className={`branch-details-panel ${activeBranch === 'vilangudi' ? 'active' : ''}`}>
              <div className="contact-details-list">
                <div className="contact-details-item">
                  <div className="contact-icon-box"><i className="fa-solid fa-location-dot"></i></div>
                  <div className="contact-text-box">
                    <h4>Location Address</h4>
                    <p>45, Bypass Road, New Vilangudi,<br />Madurai - 625018 (Next to Post Office)</p>
                  </div>
                </div>
                
                <div className="contact-details-item">
                  <div className="contact-icon-box"><i className="fa-solid fa-phone"></i></div>
                  <div className="contact-text-box">
                    <h4>Contact Helpline</h4>
                    <p>+91 7904723536</p>
                  </div>
                </div>

                <div className="contact-details-item">
                  <div className="contact-icon-box"><i className="fa-solid fa-clock"></i></div>
                  <div className="contact-text-box">
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 4:30 PM - 8:30 PM<br />Sunday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Dynamic Google Maps iframe */}
              <div className="map-mock-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-md)', height: '260px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0125439401726!2d78.0863503!3d9.9464503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfa7a187313%3A0xb366c8f94d930263!2sNew+Vilangudi%2C%20Madurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Vilangudi Branch Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col">
            <h3 className="contact-form-title">Quick Inquiry</h3>
            <p className="contact-form-desc">Provide details below, and our program coordinator will reach out to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="inq-name" className="form-label">Parent / Student Name</label>
                  <input 
                    type="text" 
                    id="inq-name" 
                    className="form-control" 
                    placeholder="e.g. Rahul S"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="inq-phone" className="form-label">Contact Number</label>
                  <input 
                    type="tel" 
                    id="inq-phone" 
                    className="form-control" 
                    placeholder="e.g. 7904723536"
                    value={formData.phone}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit mobile number"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="inq-grade" className="form-label">Target Class</label>
                  <select 
                    id="inq-grade" 
                    className="form-control"
                    value={formData.grade}
                    onChange={handleInputChange}
                  >
                    <option value="Primary-LKG-5th">Primary School (LKG - 5th)</option>
                    <option value="Middle-6th-8th">Middle School (6th - 8th)</option>
                    <option value="High-9th-10th">Secondary Foundation (9th - 10th)</option>
                    <option value="Higher-11th-12th">HSC Boards (11th - 12th)</option>
                    <option value="NEET-JEE">NEET / JEE Preparation</option>
                    <option value="Spoken-English">Spoken English Skills</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="inq-message" className="form-label">Specific Query or Subject Needs</label>
                  <textarea 
                    id="inq-message" 
                    className="form-control" 
                    rows="3" 
                    placeholder="e.g. Inquire about HSC Mathematics timings..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
