// page for resume section
import React from 'react';

function Resume() {
  return (
    <section className="p-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Download Resume</h2>
        <a href="path/to/resume.pdf" download className="text-blue-500">
          Download PDF
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Proficiencies</h2>
        <ul className="list-disc pl-4">
          <li>Front-end Development</li>
          <li>React.js</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;