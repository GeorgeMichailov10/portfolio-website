import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="about-content">
        <h2>About Me</h2>
        <p className="bio">
          I am a passionate aspiring software engineer with a focus on scalable system design.
          My expertise spans, Machine Learning, Kubernetes, AI Cloud Services, Software As A Service,
          and Distributed Systems. I have finetuned and built my own LLM server with Go and Python.
          I love to solve complex problems and continuously learning how to use and build new tools.
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