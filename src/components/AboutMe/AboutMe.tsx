import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="about-content">
        <h2>About Me</h2>
        <p className="bio">
          I'm a passionate software engineer with a focus on building high-performance systems.
          My expertise spans Machine Learning, C++, Cloud Computing, AI, and Distributed Systems.
          I once built my own neural network library in C++ as a personal challenge and fun project.
          I thrive on solving complex problems and continuously learning new technologies.
          Let's explore how innovation meets code.
        </p>
        <div className="tech-stack">
          <img src="path-to-cplusplus-icon.png" alt="C++" />
          <img src="path-to-python-icon.png" alt="Python" />
          <img src="path-to-kubernetes-icon.png" alt="Kubernetes" />
          {/* Add additional icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;