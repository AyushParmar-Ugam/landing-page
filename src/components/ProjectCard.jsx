import React from "react";
import Tag from "./ui/Tag";

/**
 * Single project card. Kept separate from Projects.jsx so the card
 * layout can be reused (e.g. on a future case-studies page) without
 * dragging the whole section along with it.
 */
export default function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-md">
      <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <a
        href={project.link}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-700 hover:text-teal-900"
      >
        View project <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
