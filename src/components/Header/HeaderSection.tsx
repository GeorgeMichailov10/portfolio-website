import React from 'react';
import './HeaderSection.css';

const HeaderSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>George Michailov – Software Engineer</h1>
          <p className="tagline">
            Building high-performance AI & distributed systems.
          </p>
          <div className="cta-buttons">
            <button onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button>Download Resume</button>
            </a>
            <button onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="path-to-headshot.jpg" alt="Professional Headshot" />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
