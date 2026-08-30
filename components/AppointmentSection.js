"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import AppointmentForm from "./AppointmentForm";
import LoginRequiredModal from "./LoginRequiredModal";

export default function AppointmentSection() {
  const { status } = useSession();

  const [showLogin, setShowLogin] =
    useState(false);

  const [showForm, setShowForm] =
    useState(false);

  const handleBookAppointment = () => {
    if (status !== "authenticated") {
      setShowLogin(true);
      return;
    }

    setShowForm(true);
  };

  return (
    <>
      <section className="py-24 bg-[#fff8f2]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[2rem] bg-[#7d1235] text-white text-center p-10 md:p-16">
            <p className="uppercase tracking-[0.25em] text-[#f1c98c] text-sm">
              Your Beauty Journey
            </p>

            <h2 className="text-4xl md:text-6xl font-serif mt-4">
              Ready to Feel Beautiful?
            </h2>

            <p className="max-w-2xl mx-auto mt-5 text-white/80">
              Book your appointment and let our beauty
              experts create a look made especially for you.
            </p>

            <button
              onClick={handleBookAppointment}
              className="mt-8 bg-white text-[#7d1235] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e5d5] transition"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </section>

      {showLogin && (
        <LoginRequiredModal
          onClose={() => setShowLogin(false)}
        />
      )}

      {showForm && (
        <AppointmentForm
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}