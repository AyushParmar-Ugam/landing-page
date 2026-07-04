import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="logo">Ayush — Web Developer</h1>
          <nav className="nav">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="container section">
          <Hero />
        </section>

        <section id="about" className="container section">
          <About />
        </section>

        <section id="skills" className="container section">
          <Skills />
        </section>

        <section id="projects" className="container section">
          <Projects />
        </section>

        <section id="contact" className="container section">
          <Contact />
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Ayush Parmar. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
