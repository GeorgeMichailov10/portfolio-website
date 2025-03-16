import React from 'react';
import './Experience.css';

interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ClientProject {
  name: string;
  description: string;
}

const pastWork: WorkExperience[] = [
  {
    title: 'Software Engineer',
    company: 'Tech Company A',
    period: 'Jan 2020 - Present',
    description: 'Worked on high-performance distributed systems and cloud solutions.'
  },
  {
    title: 'Frontend Developer',
    company: 'Creative Agency B',
    period: 'Jun 2018 - Dec 2019',
    description: 'Developed engaging user interfaces and improved client-side performance.'
  },
];

const clientProjects: ClientProject[] = [
  {
    name: 'Client Project 1',
    description: 'A brief description of the project and the technologies used.'
  },
  {
    name: 'Client Project 2',
    description: 'A brief description of the project and the impact achieved.'
  },
];

const Experience: React.FC = () => {
  return (
    <section className="experience">
      <div className="experience-container">
        <h2>Experience & Achievements</h2>
        <div className="experience-section">
          <h3>Past Work Experience</h3>
          <ul className="work-list">
            {pastWork.map((job, index) => (
              <li key={index} className="work-item">
                <h4>{job.title} <span className="company">at {job.company}</span></h4>
                <p className="period">{job.period}</p>
                <p className="description">{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="experience-section">
          <h3>Client Projects</h3>
          <ul className="project-list">
            {clientProjects.map((project, index) => (
              <li key={index} className="project-item">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
          {/* Placeholder for dynamically adding more client projects */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
