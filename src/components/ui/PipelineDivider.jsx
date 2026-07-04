import React from "react";

/**
 * Signature motif: a small automation "pipeline" — a dotted line with
 * node markers — echoing the input -> process -> output flow of the
 * automation work described on the site. Reused as a section divider.
 */
export default function PipelineDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
      <span className="h-px w-16 border-t border-dashed border-teal-600/40" />
      <span className="h-2 w-2 rounded-full bg-gold-400" />
      <span className="h-px w-16 border-t border-dashed border-teal-600/40" />
      <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
    </div>
  );
}
