"use client";
import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email.";
    }
    if (!password || password.length < 6) {
      return "Password must be at least 6 characters.";
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) return setError(v);
    setBusy(true);
    try {
      // Simulate login — replace with real API call
      await new Promise((r) => setTimeout(r, 800));
      setSuccess(true);
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full shadow-amber-200 shadow rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 bg-linear-to-b from-blue-600 to-indigo-600 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
          <p className="text-sm text-blue-100/90">
            Sign in to access your dashboard and projects.
          </p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-wide text-blue-100/80">
              Quick tips
            </p>
            <ul className="mt-3 text-sm space-y-2 list-disc list-inside text-blue-100/85">
              <li>Use your work or personal email.</li>
              <li>Passwords should be 6+ characters.</li>
              <li>Contact me if you need access.</li>
            </ul>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-4">Sign in</h3>

          {success ? (
            <div className="rounded-md p-4 mb-4 bg-green-50 text-green-800">
              Signed in (demo)
            </div>
          ) : null}

          {error ? (
            <div className="rounded-md p-3 mb-4 bg-red-50 text-red-800">
              {error}
            </div>
          ) : null}

          <form onSubmit={handleSubmit} noValidate>
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

            <label className="block mb-3">
              <span className="text-sm font-medium text-gray-700">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your password"
                required
              />
            </label>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-indigo-600">
                Forgot password?
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={busy}
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 disabled:opacity-60"
              >
                {busy ? "Signing in..." : "Sign in"}
              </button>

              <a href="/register" className="text-sm text-gray-600">
                Create account
              </a>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-xs text-gray-400">Or continue with</p>
            <div className="flex gap-3 mt-3">
              <button className="flex-1 border rounded-md py-2 text-sm">
                Continue with GitHub
              </button>
              <button className="flex-1 border rounded-md py-2 text-sm">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
