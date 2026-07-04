import React, { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with a real API call or email service.
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <SectionHeading
          eyebrow="contact"
          title="Have a project or a slow process to fix?"
          description="Tell me a bit about it. I reply within a day, usually with a couple of questions and an honest read on scope."
        />
        <p className="text-sm text-muted">
          Prefer email? Reach me directly at{" "}
          <a href="mailto:hello@ayushparmar.dev" className="font-medium text-teal-700">
            hello@ayushparmar.dev
          </a>
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-line bg-white p-6"
        aria-label="Contact form"
      >
        {submitted && (
          <p className="mb-4 rounded-lg bg-teal-50 px-4 py-3 text-sm text-teal-700">
            Thanks, {form.name || "there"} — your message is in. I'll get back to you soon.
          </p>
        )}

        <label className="mb-4 block text-sm text-ink">
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="focus-ring mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm"
          />
        </label>

        <label className="mb-4 block text-sm text-ink">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="focus-ring mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm"
          />
        </label>

        <label className="mb-4 block text-sm text-ink">
          What are you looking to build or automate?
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            className="focus-ring mt-1 w-full rounded-lg border border-line px-3 py-2 text-sm"
          />
        </label>

        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Send message
        </Button>
      </form>
    </div>
  );
}
