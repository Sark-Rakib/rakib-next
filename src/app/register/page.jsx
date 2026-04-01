"use client";
import React, { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    if (!name.trim()) return "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email.";
    if (!password || password.length < 6)
      return "Password must be at least 6 characters.";
    if (password !== confirm) return "Passwords do not match.";
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);
    setBusy(true);
    try {
      // Replace with real API call
      await new Promise((r) => setTimeout(r, 800));
      setSuccess(true);
    } catch (err) {
      setError("Registration failed. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full shadow-amber-200 shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Create account</h1>

        {success ? (
          <div className="rounded-md p-3 mb-4 bg-green-50 text-green-800">
            Account created (demo)
          </div>
        ) : null}

        {error ? (
          <div className="rounded-md p-3 mb-4 bg-red-50 text-red-800">
            {error}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} noValidate>
          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Full name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-400"
              placeholder="Your full name"
              required
            />
          </label>

          <label className="block mb-3">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
              required
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="block mb-3">
              <span className="text-sm font-medium text-gray-700">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-400"
                placeholder="Create a password"
                required
              />
            </label>

            <label className="block mb-3">
              <span className="text-sm font-medium text-gray-700">Confirm</span>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-400"
                placeholder="Confirm password"
                required
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={busy}
              className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-60"
            >
              {busy ? "Creating..." : "Create account"}
            </button>

            <a href="/login" className="text-sm text-gray-600 mt-3">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
