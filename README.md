# Developer & AI Automation Portfolio

A React + Tailwind CSS landing page for a freelance web developer / small
agency positioning, built to win client and agency work in web development
and AI automation.

## Sections

- **Hero** — value proposition plus a small visual of an automation
  pipeline (input → agent → output).
- **About** — bio and quick facts.
- **Skills** — tech stack, including AI automation tools.
- **Projects** — mix of web and AI-automation case studies.
- **Blog** — short posts on AI, AI automation, and agentic AI.
- **Contact** — client-side contact form (no backend yet).

## Project structure

```
src/
  components/
    layout/       Header, Footer, Container, Section (page scaffolding)
    ui/           Button, Tag, SectionHeading, PipelineDivider (reusable primitives)
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    ProjectCard.jsx
    Blogs.jsx
    BlogCard.jsx
    Contact.jsx
  data/
    projects.js
    blogs.js
    skills.js
  styles/
    index.css     Tailwind entry point
  App.jsx
  index.js
```

## Design

- **Colors**: warm paper background (`#F6F5F1`), near-black ink text,
  a deep teal (`#2F6F5E`) as the primary brand color, and a muted gold
  (`#E7B84B`) used sparingly as an accent.
- **Type**: Space Grotesk for headings, Inter for body copy, IBM Plex
  Mono for small labels ("// about") that nod to the developer/automation
  subject matter.
- **Signature element**: a small dotted "pipeline" divider (see
  `src/components/ui/PipelineDivider.jsx`) representing an automation
  flow, reused across the hero and section breaks.

## Getting started

```bash
npx create-react-app my-portfolio
# then copy src/, public/, tailwind.config.js, postcss.config.js,
# and package.json from this repo into my-portfolio, replacing the defaults

cd my-portfolio
npm install
npm start
```

## Notes

- The contact form is client-side only. Replace `handleSubmit` in
  `src/components/Contact.jsx` with a real API or email service call.
- Blog posts are static data in `src/data/blogs.js` — swap in a CMS or
  MDX pipeline later without changing `Blogs.jsx` or `BlogCard.jsx`.
