import React from "react";

const VARIANTS = {
  primary:
    "bg-teal-600 text-white hover:bg-teal-700 focus-visible:ring-teal-700",
  outline:
    "bg-transparent text-teal-700 border border-teal-600/40 hover:border-teal-600 hover:bg-teal-50 focus-visible:ring-teal-700",
  ghost:
    "bg-transparent text-ink hover:text-teal-700 focus-visible:ring-teal-700"
};

/**
 * Shared call-to-action button used across the site so every action
 * looks and behaves the same way. Renders an <a> when `href` is given,
 * otherwise a <button>.
 */
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium font-body transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
