import React, { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import BlogCard from "./BlogCard";
import Tag from "./ui/Tag";
import blogs from "../data/blogs";

export default function Blogs() {
  const [activePost, setActivePost] = useState(null);

  return (
    <div>
      <SectionHeading
        eyebrow="blog"
        title="Notes on AI, automation, and agents"
        description="Short, practical write-ups on how AI, AI automation, and agentic AI actually show up in day-to-day business work — not just the headlines."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <BlogCard key={post.id} post={post} onOpen={setActivePost} />
        ))}
      </div>

      {activePost && (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center bg-ink/40 p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-modal-title"
          onClick={() => setActivePost(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-8 sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Tag tone="gold">{activePost.category}</Tag>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setActivePost(null)}
                className="focus-ring rounded p-1 text-muted hover:text-ink"
              >
                ✕
              </button>
            </div>

            <h3 id="blog-modal-title" className="mt-4 font-display text-2xl font-semibold text-ink">
              {activePost.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">
              {activePost.readTime}
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {activePost.body.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
