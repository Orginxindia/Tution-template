import React from 'react';

// Unsplash URLs for real professional portrait profiles
const REAL_TUTOR_1 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80";
const REAL_TUTOR_2 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80";
const REAL_TUTOR_3 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80";
const REAL_TUTOR_4 = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80";

const FACULTY_DATA = [
  {
    id: 1,
    img: REAL_TUTOR_1,
    name: 'Mr. A. Vijayapathi',
    subject: 'Mathematics Expert',
    exp: 'M.Sc., B.Ed. | 12+ Years Exp'
  },
  {
    id: 2,
    img: REAL_TUTOR_2,
    name: 'Mrs. R. Priya',
    subject: 'Accountancy Lead',
    exp: 'M.Com., M.Phil. | 10+ Years Exp'
  },
  {
    id: 3,
    img: REAL_TUTOR_3,
    name: 'Mr. K. Rajesh',
    subject: 'Physics & NEET Coach',
    exp: 'B.Tech. | 6+ Years Exp'
  },
  {
    id: 4,
    img: REAL_TUTOR_4,
    name: 'Ms. S. Meera',
    subject: 'Spoken English Specialist',
    exp: 'M.A. (English Lit) | 5+ Years Exp'
  }
];

export default function Faculty() {
  return (
    <section className="faculty section-padding reveal reveal-up" id="faculty">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="badge badge-primary">Our Educators</span>
          <h2 className="section-title">Expert <span className="italic">Faculty</span></h2>
          <p className="section-subtitle">Passionate teachers dedicated to simplify curriculum benchmarks and boost individual outcomes.</p>
        </div>

        <div className="faculty-grid">
          {FACULTY_DATA.map(fac => (
            <div key={fac.id} className="faculty-card">
              <div className="fac-img-container">
                <img src={fac.img} alt={fac.name} className="fac-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="fac-name">{fac.name}</h3>
              <p className="fac-subject">{fac.subject}</p>
              <p className="fac-exp">{fac.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
