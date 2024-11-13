// src/components/Project.js
import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'ML Image Classification',
    description: 'A machine learning project focused on classifying images into various categories such as Animals, Nature, People, and Man-made objects.',
    link: 'https://github.com/your-github-username/ml-image-classification'
  },
  {
    title: 'Sign Language Detection',
    description: 'A lightweight model for recognizing sign language gestures in real-time, using optimized algorithms for efficient detection.',
    link: 'https://github.com/your-github-username/sign-language-detection'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio website built with React, showcasing projects, skills, and contact information in a single-page application format.',
    link: 'https://your-portfolio-link.com'
  },
  {
    title: 'Rock vs Mine Prediction',
    description: 'A machine learning project to predict whether a sonar signal indicates a rock or a mine, using classification techniques.',
    link: 'https://github.com/Manya0407/Rock-Vs-Mine-Prediction'
  }
];

function Project() {
  return (
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
