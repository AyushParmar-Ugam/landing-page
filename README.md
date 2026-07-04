# Simple React Developer Landing Page

This is a minimal, well-structured React landing page with sections:
- Hero
- About
- Skills
- Projects
- Contact

Quick start (using Create React App):
1. npx create-react-app my-portfolio
2. Replace the `src/` and `public/index.html` files with the files from this repo.
3. cd my-portfolio
4. npm start

Project structure:
- public/
  - index.html
- src/
  - components/
    - Hero.jsx
    - About.jsx
    - Skills.jsx
    - Projects.jsx
    - Contact.jsx
  - data/
    - projects.js
  - styles/
    - global.css
  - App.jsx
  - index.js

Notes:
- The contact form is client-side only (no backend). Replace the submit handler to connect to an API or email service.
- Keep styling in `global.css` for simplicity; consider CSS modules or styled-components for larger projects.
