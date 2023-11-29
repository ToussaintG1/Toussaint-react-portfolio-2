// page for portfolio section
import React from 'react';

function Portfolio() {
  // Replace the sample data with your project information
  const projects = [
    { title: 'Project 1', image: 'path/to/project1.jpg', demoLink: '#', repoLink: '#' },
    // Add more projects as needed
  ];

  return (
    <section className="p-8">
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <div className="flex space-x-2">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Demo
              </a>
              <span className="text-gray-500">|</span>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="text-gray-500">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;