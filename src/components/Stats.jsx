import React, { useEffect, useState, useRef } from 'react';

function CountUpItem({ target, suffix = '', duration = 1500 }) {
  const [value, setValue] = useState(isNaN(parseInt(target, 10)) ? target : '0');
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const numericTarget = parseInt(target, 10);
    if (isNaN(numericTarget)) {
      setValue(target); // For "LKG-12th" style ranges
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const currentCount = Math.floor(progress * numericTarget);
          
          setValue(currentCount.toString());
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setValue(numericTarget.toString());
          }
        };
        
        window.requestAnimationFrame(step);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={elementRef} className="stat-number">
      {value}{!isNaN(parseInt(target, 10)) ? suffix : ''}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <CountUpItem target="15" suffix="+" />
            <div className="stat-label">Expert Tutors</div>
          </div>
          <div className="stat-item">
            <CountUpItem target="LKG - 12th" />
            <div className="stat-label">Classes Covered</div>
          </div>
          <div className="stat-item">
            <CountUpItem target="100" suffix="%" />
            <div className="stat-label">Pass Rate</div>
          </div>
          <div className="stat-item">
            <CountUpItem target="800" suffix="+" />
            <div className="stat-label">Students Guided</div>
          </div>
        </div>
      </div>
    </section>
  );
}
