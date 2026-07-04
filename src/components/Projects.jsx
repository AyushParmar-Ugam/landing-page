import React from "react";
import SectionHeading from "./ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <div>
      <SectionHeading
        eyebrow="projects"
        title="Selected work"
        description="A mix of client websites and the automation projects I enjoy most — the ones that keep saving time long after launch."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
