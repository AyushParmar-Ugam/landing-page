import React from "react";
import Tag from "./ui/Tag";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

/**
 * Single blog post preview card. Expects a `post` object (see
 * src/data/blogs.js) and an `onOpen` handler for reading the full post.
 */
export default function BlogCard({ post, onOpen }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between">
        <Tag tone="gold">{post.category}</Tag>
        <span className="font-mono text-xs text-muted">{post.readTime}</span>
      </div>

      <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-ink">
        {post.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>

      <div className="mt-5 flex items-center justify-between">
        <span className="font-mono text-xs text-muted">{formatDate(post.date)}</span>
        <button
          type="button"
          onClick={() => onOpen(post)}
          className="focus-ring rounded text-sm font-medium text-teal-700 hover:text-teal-900"
        >
          Read post →
        </button>
      </div>
    </article>
  );
}
