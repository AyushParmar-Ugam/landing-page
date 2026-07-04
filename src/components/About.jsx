import React from "react";
import SectionHeading from "./ui/SectionHeading";

const FACTS = [
  { label: "Experience", value: "3+ years building web apps and automations" },
  { label: "Location", value: "India, working with clients worldwide" },
  { label: "Availability", value: "Open to freelance and full-time roles" }
];

export default function About() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <SectionHeading
          eyebrow="about"
          title="I care about software that actually gets used"
        />
        <p className="text-muted">
          I'm a web developer focused on building clean, accessible
          interfaces and the automation underneath them. Most of my
          recent work sits at the point where a normal web app meets an
          AI system — a support form that triages itself, a dashboard
          that an agent keeps up to date, a workflow that used to take
          a person twenty minutes and now takes no one any time at all.
        </p>
        <p className="mt-4 text-muted">
          I like working close to the team I'm building for. That means
          asking what's actually slow or annoying in your day-to-day
          before writing a single line of code, and it means shipping
          something you can see and test early, rather than
          disappearing for a month.
        </p>
      </div>

      <div className="rounded-2xl border border-line bg-white p-6">
        <h3 className="font-mono text-sm uppercase tracking-wide text-muted">
          Quick facts
        </h3>
        <ul className="mt-4 flex flex-col gap-4">
          {FACTS.map((fact) => (
            <li key={fact.label} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
              <p className="text-xs font-mono text-teal-600">{fact.label}</p>
              <p className="mt-1 text-sm text-ink">{fact.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
