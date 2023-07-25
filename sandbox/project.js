import React from 'react';

const Project = ({ title, imageSrc, deployLink, githubLink }) => {
  return (
    <div className="project">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <a href={deployLink} target="_blank" rel="noopener noreferrer">View Demo</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;
