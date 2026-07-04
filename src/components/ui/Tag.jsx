import React from "react";

/**
 * Small pill used for tech stack labels, blog categories, etc.
 */
export default function Tag({ children, tone = "teal" }) {
  const toneClasses =
    tone === "gold"
      ? "bg-gold-100 text-gold-600"
      : "bg-teal-50 text-teal-700";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-mono ${toneClasses}`}
    >
      {children}
    </span>
  );
}
