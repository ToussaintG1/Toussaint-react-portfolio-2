// page for resume section
import React from 'react';


function Resume() {
  return (
    <section className="p-8">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Download Resume</h2>
        <a href="https://docs.google.com/document/d/1G8FxVahBH_X76HQ_3DX01ZmSWJZQk6sE6rZET8Qze80/edit?usp=sharing" download className="text-blue-500">
         Link To Resume
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Proficiencies</h2>
        <ul className="list-disc pl-4">
          <li>Front-end Development</li>
          <li>Back-end Development</li>
          <li>MySQL</li>
          <li>React.js</li>
          {/* Add more proficiencies as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;