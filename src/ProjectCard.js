import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Code</a>
    </div>
  );
};

export default ProjectCard;
