import React, { useState } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    question: 'What are the daily class timings?',
    answer: 'Regular evening batches run on weekdays (Monday to Saturday) from 4:30 PM to 8:30 PM. Each subject session typically lasts for 1 to 1.5 hours. Custom weekend batches are arranged for higher secondary board courses.'
  },
  {
    id: 2,
    question: 'Do you cover both State Board and CBSE syllabi?',
    answer: 'Yes. We run separate batch timelines for Tamil Nadu State Board and CBSE students. This ensures that all textbooks, chapter sequences, and exam blueprints are strictly followed according to respective school standards.'
  },
  {
    id: 3,
    question: 'Can my child attend a free trial/demo class?',
    answer: 'Absolutely! We offer up to 2 free trial sessions for any new student. This helps parents and students experience our micro-learning teaching style and inspect our AC classrooms firsthand before formal enrollment.'
  },
  {
    id: 4,
    question: 'How do you handle missed classes?',
    answer: 'If a student misses a session due to illness or school events, they can attend our doubt clearance slot on Saturdays. Tutors will review the key concepts covered and help the student complete the worksheets.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq section-padding reveal reveal-up" id="faq">
      <div className="container">
        <div className="section-title-wrapper">
          <span className="badge badge-primary">Any Questions?</span>
          <h2 className="section-title">Frequently Asked <span className="italic">Questions</span></h2>
          <p className="section-subtitle">Find quick answers to typical queries about timelines, batch sizes, syllabus prep, and support.</p>
        </div>

        <div className="faq-container">
          {FAQ_DATA.map(item => (
            <div key={item.id} className={`faq-item ${openId === item.id ? 'active' : ''}`}>
              <button 
                className="faq-question-btn" 
                onClick={() => handleToggle(item.id)}
                aria-expanded={openId === item.id}
              >
                <span>{item.question}</span>
                <i className="fa-solid fa-plus faq-icon"></i>
              </button>
              
              <div 
                className="faq-answer" 
                style={{ maxHeight: openId === item.id ? '200px' : '0px' }}
              >
                <div className="faq-answer-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
