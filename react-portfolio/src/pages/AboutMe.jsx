// page for about me section
import React from 'react';

function AboutMe() {
  return (
    <section className="p-8">
      <div className="flex items-center justify-center mb-4">
        <img
          src="./src/assets/profile-picture.jpg"
          alt="Kevin Dimayuga's profile picture"
          className="rounded-full w-24 h-24 object-cover"
        />
      </div>
      <p className="text-center text-gray-700">
        Hi, I'm Toussaint Gilbert, a passionate individual seeking to enter the tech industry. I have with expertise in HTML, CSS, Javascript.
      </p>
    </section>
  );
}

export default AboutMe;