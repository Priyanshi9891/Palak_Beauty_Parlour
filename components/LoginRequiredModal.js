"use client";

import Link from "next/link";
import { X, LockKeyhole } from "lucide-react";

export default function LoginRequiredModal({
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <X size={22} />
        </button>

        <div className="w-16 h-16 mx-auto rounded-full bg-[#f8e8ee] flex items-center justify-center text-[#7d1235]">
          <LockKeyhole size={28} />
        </div>

        <h2 className="text-2xl font-serif mt-5">
          Login Required
        </h2>

        <p className="text-gray-600 mt-3 leading-6">
          Please login to your account before booking
          an appointment.
        </p>

        <Link
          href="/login?redirect=/"
          onClick={onClose}
          className="block mt-7 bg-[#7d1235] text-white py-3.5 rounded-full font-semibold hover:bg-[#4c0921] transition"
        >
          LOGIN TO CONTINUE
        </Link>

        <button
          onClick={onClose}
          className="mt-4 text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}