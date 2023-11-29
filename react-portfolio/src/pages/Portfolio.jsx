// page for portfolio section
import React from 'react';
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';

function Portfolio() {
  // Replace the sample data with your project information
  const projects = [
    { title: 'Advert Logix', image: image1, demoLink: '#advertlogix.com', repoLink: '#https://github.com/ToussaintG1/advert-logix-web' },
    { title: 'Horizon Digital Marketing', image: image2, demoLink: '#', repoLink: '#' },
    { title: 'Project 3', image: image3, demoLink: '#', repoLink: '#' },
    { title: 'Project 4', image: image4, demoLink: '#', repoLink: '#' },
    { title: 'Project 5', image: image5, demoLink: '#', repoLink: '#' },
    { title: 'Project 6', image: image6, demoLink: '#', repoLink: '#' },
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