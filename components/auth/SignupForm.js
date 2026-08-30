"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(
        "/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setSuccess(
        "Account created! Redirecting to login..."
      );

      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label className="block text-sm font-semibold mb-2">
          Full Name
        </label>

        <input
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Email
        </label>

        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Phone
        </label>

        <input
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="9876543210"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235]"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">
          Password
        </label>

        <input
          type="password"
          name="password"
          required
          minLength={6}
          value={form.password}
          onChange={handleChange}
          placeholder="Minimum 6 characters"
          className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235]"
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}

      {success && (
        <p className="text-green-600 text-sm">
          {success}
        </p>
      )}

      <button
        disabled={loading}
        className="w-full bg-[#7d1235] text-white py-3.5 rounded-full font-semibold disabled:opacity-50"
      >
        {loading
          ? "CREATING ACCOUNT..."
          : "CREATE ACCOUNT"}
      </button>

      <p className="text-center text-gray-600 text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#7d1235] font-semibold"
        >
          Login
        </Link>
      </p>
    </form>
  );
}