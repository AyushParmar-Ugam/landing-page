import React from "react";
import SectionHeading from "./ui/SectionHeading";
import skills from "../data/skills";

export default function Skills() {
  return (
    <div>
      <SectionHeading
        eyebrow="skills"
        title="Technologies and tools I reach for"
        description="A mix of front-end craft and the AI/automation tools that turn a static site into something that works on its own."
      />

      <ul className="grid gap-6 sm:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-sm font-medium text-ink">{skill.name}</span>
              <span className="font-mono text-xs text-muted">{skill.level}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-teal-50">
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal-600 to-gold-400"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
