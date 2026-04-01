"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email.";
    if (!message.trim() || message.trim().length < 10)
      return "Please enter a longer message (10+ chars).";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);
    setBusy(true);
    try {
      // Replace with real API call: POST /api/contact
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError("Failed to send message. Try again later.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-400 mb-6">
        Have a project or question? Send a message and I’ll get back to you.
      </p>

      {sent ? (
        <div className="mb-6 p-4 rounded-md bg-green-50 text-green-800">
          Message sent — thank you!
        </div>
      ) : null}

      {error ? (
        <div className="mb-6 p-3 rounded-md bg-red-50 text-red-800">
          {error}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <label className="block">
          <span className="text-sm text-gray-200">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md border-gray-200 shadow-sm bg-white/5 focus:ring-2 focus:ring-indigo-400"
            placeholder="Your name"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-200">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md border-gray-200 shadow-sm bg-white/5 focus:ring-2 focus:ring-indigo-400"
            placeholder="you@example.com"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-200">Message</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            className="mt-1 block w-full p-2 rounded-md border-gray-200 shadow-sm bg-white/5 focus:ring-2 focus:ring-indigo-400"
            placeholder="Tell me about anything..."
            required
          />
        </label>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={busy}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-60"
          >
            {busy ? "Sending..." : "Send message"}
          </button>

          <a
            href="mailto:mdrakibsarkar1@gmail.com"
            className="text-sm text-gray-300"
          >
            Or email: mdrakibsarkar1@gmail.com
          </a>
        </div>
      </form>
    </main>
  );
}
