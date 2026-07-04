import React from "react";

const SKILLS = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "TypeScript", level: 65 },
  { name: "Node.js", level: 70 }
];

export default function Skills() {
  return (
    <div>
      <h3>Skills</h3>
      <p>Technologies and tools I frequently use.</p>

      <ul className="skills-list">
        {SKILLS.map((s) => (
          <li key={s.name} className="skill">
            <div className="skill-header">
              <span>{s.name}</span>
              <span className="skill-percent">{s.level}%</span>
            </div>
            <div className="skill-bar" aria-hidden>
              <div
                className="skill-fill"
                style={{ width: `${s.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
