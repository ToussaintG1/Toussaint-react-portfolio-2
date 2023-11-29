
// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="p-4 bg-gray-200 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://github.com/ToussaintG1" target="_blank" rel="noopener noreferrer" className="text-gray-700">
          Toussaint's GitHub
        </a>
        <a href="https://www.linkedin.com/in/toussaint-gilbert-b02138251/" target="_blank" rel="noopener noreferrer" className="text-gray-700">
          Toussaint's LinkedIn
        </a>
        {/* Add more links for other platforms */}
      </div>
    </footer>
  );
}

export default Footer;