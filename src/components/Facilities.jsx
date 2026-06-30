import React from 'react';

const FACILITIES_DATA = [
  {
    id: 1,
    icon: 'fa-snowflake',
    title: 'Fully AC Classrooms',
    desc: 'Equipped with quiet split AC systems to ensure comfort and maximum focus during evening tutoring batches.'
  },
  {
    id: 2,
    icon: 'fa-shield-halved',
    title: 'CCTV Security',
    desc: 'Continuous surveillance cameras across classrooms and entry gates for student safety and parental reassurance.'
  },
  {
    id: 3,
    icon: 'fa-chalkboard',
    title: 'Smart Classrooms',
    desc: 'Equipped with digital screens and projection aids to illustrate Science diagrams and Math proofs easily.'
  },
  {
    id: 4,
    icon: 'fa-book',
    title: 'Rich Library & Notes',
    desc: 'Direct access to chapter-wise booklets, previous 10-year question banks, and custom shortcut checklists.'
  },
  {
    id: 5,
    icon: 'fa-list-check',
    title: 'Regular Test Series',
    desc: 'Structured weekly tests and full-syllabus mock exams configured precisely to State Board and CBSE formats.'
  },
  {
    id: 6,
    icon: 'fa-circle-question',
    title: 'Doubt Clearance slots',
    desc: 'Dedicated slots every Saturday for individual problem-solving guidance and conceptual math clearance.'
  }
];

export default function Facilities() {
  return (
    <section className="facilities section-padding reveal reveal-up" id="facilities">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="badge badge-primary">Learning Atmosphere</span>
          <h2 className="section-title">Designed for <span className="italic">Focus</span></h2>
          <p className="section-subtitle">A quiet, modern, and safe learning environment equipped with everything needed for conceptual clarity.</p>
        </div>

        <div className="facilities-grid">
          {FACILITIES_DATA.map(facil => (
            <div key={facil.id} className="facility-card">
              <div className="facil-icon-wrapper">
                <i className={`fa-solid ${facil.icon}`}></i>
              </div>
              <h3 className="facil-title">{facil.title}</h3>
              <p className="facil-desc">{facil.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
