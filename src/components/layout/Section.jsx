import React from "react";
import Container from "./Container";

/**
 * Wraps a page section with consistent vertical spacing, an id for
 * in-page navigation, and an optional background tone.
 */
export default function Section({ id, children, tone = "paper", className = "" }) {
  const toneClasses = tone === "surface" ? "bg-white" : "bg-paper";
  return (
    <section id={id} className={`${toneClasses} py-20 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
