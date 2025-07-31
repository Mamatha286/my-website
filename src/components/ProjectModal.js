import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={closeModal}>&times;</span>
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title} className="modal-image" />
        <p>{project.details}</p>
        <h4>Tech Stack:</h4>
        <p>{project.tech}</p>
        <h4>Features:</h4>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <a href={project.github} target="_blank" rel="noreferrer" className="github-link">View Code on GitHub</a>
      </div>
    </div>
  );
};

export default ProjectModal;
