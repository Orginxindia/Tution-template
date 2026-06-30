import React, { useState } from 'react';

// Unsplash URLs for real classroom and study gallery photos
const GALLERY_CLASSROOM_1 = "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80";
const GALLERY_EXAM_HALL = "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80";
const GALLERY_STUDY_DESK = "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80";
const GALLERY_TOPPERS_EVENT = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80";

const GALLERY_DATA = [
  {
    id: 1,
    img: GALLERY_CLASSROOM_1,
    category: 'classroom',
    title: 'AC Smart Classrooms',
    desc: 'Classroom'
  },
  {
    id: 2,
    img: GALLERY_EXAM_HALL,
    category: 'activity',
    title: 'Weekly Test Sessions',
    desc: 'Activity'
  },
  {
    id: 3,
    img: GALLERY_STUDY_DESK,
    category: 'classroom',
    title: 'Reference Study Desk',
    desc: 'Classroom'
  },
  {
    id: 4,
    img: GALLERY_TOPPERS_EVENT,
    category: 'event',
    title: 'Toppers Felicitation',
    desc: 'Event'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === filter);

  return (
    <section className="gallery section-padding reveal reveal-up" id="gallery">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="badge badge-primary">Photo Gallery</span>
          <h2 className="section-title">Life at <span className="italic">Wizard</span></h2>
          <p className="section-subtitle">A sneak peek into our spacious classrooms, rigorous mock testing hours, and success events.</p>
        </div>

        {/* Gallery Filters */}
        <div className="courses-filter" style={{ marginBottom: '2.5rem' }}>
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All Photos
          </button>
          <button className={`filter-btn ${filter === 'classroom' ? 'active' : ''}`} onClick={() => setFilter('classroom')}>
            Classrooms
          </button>
          <button className={`filter-btn ${filter === 'activity' ? 'active' : ''}`} onClick={() => setFilter('activity')}>
            Activities
          </button>
          <button className={`filter-btn ${filter === 'event' ? 'active' : ''}`} onClick={() => setFilter('event')}>
            Events
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.img} alt={item.title} className="gallery-img" style={{ width: '100%', height: '230px', objectFit: 'cover' }} />
              <div className="gallery-item-overlay">
                <div className="gallery-item-zoom"><i className="fa-solid fa-plus"></i></div>
                <h4 className="gallery-item-title">{item.title}</h4>
                <span className="gallery-item-cat">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
