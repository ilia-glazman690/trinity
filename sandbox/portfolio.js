import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  // Sample project data
  const projects = [
    {
      title: 'Project 1',
      imageSrc: 'path/to/project1.jpg',
      deployLink: 'https://example.com/project1',
      githubLink: 'https://github.com/yourusername/project1'
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            deployLink={project.deployLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
