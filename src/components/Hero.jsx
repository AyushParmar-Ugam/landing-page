import React from "react";
import Button from "./ui/Button";
import PipelineDivider from "./ui/PipelineDivider";

export default function Hero() {
  return (
    <div id="hero" className="grid items-center gap-12 py-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="animate-fade-up">
        <span className="mb-4 inline-block font-mono text-sm text-teal-600">
          // web development & ai automation
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          I build software that ships, and agents that keep working
          after you close the laptop.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          I'm Ayush, a developer who helps businesses and agencies turn
          slow manual processes into fast, reliable web apps and AI
          automations — the kind that run in the background and quietly
          save a team hours every week.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#contact" variant="primary">
            Start a project
          </Button>
          <Button href="#projects" variant="outline">
            See my work
          </Button>
        </div>
      </div>

      <div className="relative rounded-2xl border border-line bg-white p-8 shadow-sm">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          a simple automation, end to end
        </p>

        <div className="mt-8 flex flex-col gap-6">
          <FlowStep label="Input" detail="A client request, a form, a new lead" />
          <PipelineDivider />
          <FlowStep label="Agent" detail="Reads it, decides what to do, takes action" />
          <PipelineDivider />
          <FlowStep label="Output" detail="Task done — no one had to babysit it" tone="gold" />
        </div>
      </div>
    </div>
  );
}

function FlowStep({ label, detail, tone = "teal" }) {
  const dot = tone === "gold" ? "bg-gold-400" : "bg-teal-600";
  return (
    <div className="flex items-start gap-4">
      <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />
      <div>
        <p className="font-display text-base font-semibold text-ink">{label}</p>
        <p className="text-sm text-muted">{detail}</p>
      </div>
    </div>
  );
}
