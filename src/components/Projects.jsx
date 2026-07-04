import React from "react";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div>
      <h3>Projects</h3>
      <p>Selected projects to show the type of work I do.</p>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.id} className="project-card">
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <div className="project-meta">
              <div className="tech">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a className="link" href={p.link}>View</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
