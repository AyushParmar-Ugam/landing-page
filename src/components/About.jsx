import React from "react";

export default function About() {
  return (
    <div className="about grid">
      <div>
        <h3>About Me</h3>
        <p>
          I'm a web developer focused on building clean, well-structured front-end applications.
          I pay attention to accessibility, performance and maintainability.
        </p>
        <p>
          I enjoy working with teams, learning new technologies, and solving real-world problems with code.
        </p>
      </div>

      <div className="about-stats">
        <h4>Quick Facts</h4>
        <ul>
          <li><strong>Experience:</strong> 3+ years building web apps</li>
          <li><strong>Location:</strong> India</li>
          <li><strong>Open to:</strong> Freelance & Full-time</li>
        </ul>
      </div>
    </div>
  );
}
