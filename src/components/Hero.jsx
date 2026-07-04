import React from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Hello, I'm Ayush</h2>
        <p className="lead">
          I build accessible, performant, and maintainable web applications using modern tools.
        </p>
        <div className="hero-ctas">
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn btn-outline" href="#contact">Contact Me</a>
        </div>
      </div>
      <div className="hero-image" aria-hidden>
        <div className="avatar">AP</div>
      </div>
    </div>
  );
}
