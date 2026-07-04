import React from "react";

/**
 * Consistent heading block for every section: a small code-comment
 * style label ("// about"), a title, and an optional supporting line.
 */
export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`mb-12 flex flex-col ${alignClasses}`}>
      {eyebrow && (
        <span className="mb-3 font-mono text-sm text-teal-600">// {eyebrow}</span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted text-base sm:text-lg">{description}</p>
      )}
    </div>
  );
}
