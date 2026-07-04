import React from "react";

/**
 * Centers content and constrains its width consistently across the site.
 */
export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-[92%] max-w-content ${className}`}>
      {children}
    </div>
  );
}
