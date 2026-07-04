import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Section from "./components/layout/Section";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Section id="hero">
          <Hero />
        </Section>

        <Section id="about" tone="surface">
          <About />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="projects" tone="surface">
          <Projects />
        </Section>

        <Section id="blog">
          <Blogs />
        </Section>

        <Section id="contact" tone="surface">
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  );
}
