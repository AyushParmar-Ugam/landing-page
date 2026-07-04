import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with API call or email service
    alert(`Thanks ${form.name}! Message submitted (demo).`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="contact-grid">
      <div>
        <h3>Contact</h3>
        <p>Want to work together? Send a message and I'll get back to you.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>

        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} rows="5" required />
        </label>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}
