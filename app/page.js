"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Offers from "@/components/Offers";
import Reviews from "@/components/Reviews";
import AppointmentSection from "@/components/AppointmentSection";
import AppointmentForm from "@/components/AppointmentForm";
import LoginRequiredModal from "@/components/LoginRequiredModal";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();

  const [showLogin, setShowLogin] =
    useState(false);

  const [showAppointment, setShowAppointment] =
    useState(false);

  const handleBookAppointment = () => {
    if (status !== "authenticated") {
      setShowLogin(true);
    } else {
      setShowAppointment(true);
    }
  };

  return (
    <>
      <Navbar
        onBookAppointment={handleBookAppointment}
      />

      <main>
        <Hero
          onBookAppointment={handleBookAppointment}
        />

        <About />

        <Services />

        <Gallery />

        <Offers />

        <Reviews />

        <AppointmentSection />
      </main>

      <Footer />

      {showLogin && (
        <LoginRequiredModal
          onClose={() => setShowLogin(false)}
        />
      )}

      {showAppointment && (
        <AppointmentForm
          onClose={() =>
            setShowAppointment(false)
          }
        />
      )}
    </>
  );
}