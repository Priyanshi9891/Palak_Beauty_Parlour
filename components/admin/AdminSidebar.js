
"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  CalendarDays,
  LogOut,
} from "lucide-react";

import { signOut } from "next-auth/react";

export default function AdminSidebar() {
  const handleLogout = async () => {
    try {
      await signOut({
        redirect: false,
      });

      // Force browser to home page
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);

      // Even if something goes wrong, go to home
      window.location.href = "/";
    }
  };

  return (
    <aside className="w-full md:w-64 bg-[#260712] text-white md:min-h-screen p-6">

      {/* COMPANY NAME */}
      <Link
        href="/"
        className="flex items-baseline font-serif font-bold mb-10"
      >
        <span className="text-5xl md:text-6xl text-[#D4AF37] leading-none">
          P
        </span>

        <span className="text-2xl md:text-3xl text-white leading-none">
          ALAK
        </span>
      </Link>

      <nav className="space-y-3">

        {/* DASHBOARD */}
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
        >
          <LayoutDashboard size={19} />
          Dashboard
        </Link>

        {/* APPOINTMENTS */}
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition"
        >
          <CalendarDays size={19} />
          Appointments
        </Link>

        {/* LOGOUT */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 w-full text-left transition"
        >
          <LogOut size={19} />
          Logout
        </button>

      </nav>
    </aside>
  );
}