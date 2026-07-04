import React from "react";
import Container from "./Container";
import PipelineDivider from "../ui/PipelineDivider";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white py-10">
      <Container>
        <PipelineDivider className="mb-8" />
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-display text-base font-semibold text-ink">
            Ayush Parmar
          </p>
          <p className="max-w-md text-sm text-muted">
            Web development and AI automation for teams who want their
            software to do more of the work.
          </p>
          <p className="mt-4 font-mono text-xs text-muted">
            © {new Date().getFullYear()} Ayush Parmar. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
