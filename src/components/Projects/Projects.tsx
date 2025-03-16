import React from 'react';
import './Projects.css';

interface Project {
  thumbnail: string;
  title: string;
  techUsed: string;
  description: string;
  liveDemo: string;
  github: string;
}

const projects: Project[] = [
  {
    thumbnail: 'path-to-thumbnail1.gif',
    title: 'Project One',
    techUsed: 'React, Node.js, MongoDB',
    description: 'A short description of Project One showcasing innovative tech solutions.',
    liveDemo: 'https://example.com/demo1',
    github: 'https://github.com/username/project1',
  },
  {
    thumbnail: 'path-to-thumbnail2.gif',
    title: 'Project Two',
    techUsed: 'Python, Flask, PostgreSQL',
    description: 'Project Two is a robust web application built with a modern tech stack.',
    liveDemo: 'https://example.com/demo2',
    github: 'https://github.com/username/project2',
  },
  {
    thumbnail: 'path-to-thumbnail3.gif',
    title: 'Project Three',
    techUsed: 'C++, Qt, OpenGL',
    description: 'An innovative desktop application demonstrating high-performance graphics.',
    liveDemo: 'https://example.com/demo3',
    github: 'https://github.com/username/project3',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-thumbnail">
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p className="tech-used">{project.techUsed}</p>
                <p className="description">{project.description}</p>
                <div className="project-links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
