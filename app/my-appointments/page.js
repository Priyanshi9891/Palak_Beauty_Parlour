"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MyAppointmentsPage() {
  const { data: session, status } =
    useSession();

  const router = useRouter();

  const [appointments, setAppointments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") {
      return;
    }

    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          "/api/appointments"
        );

        const data = await response.json();

        if (response.ok) {
          setAppointments(
            data.appointments || []
          );
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [status]);

  if (status === "loading" || loading) {
    return (
      <main className="min-h-screen bg-[#fff8f2] flex items-center justify-center">
        <p className="text-[#7d1235]">
          Loading...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff8f2] py-12 px-5">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-[#7d1235] font-semibold"
        >
          ← Back to Website
        </Link>

        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-serif">
            My Appointments
          </h1>

          <p className="text-gray-600 mt-2">
            Welcome, {session?.user?.name}
          </p>
        </div>

        {appointments.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center mt-10">
            <h2 className="text-2xl font-serif">
              No appointments yet
            </h2>

            <p className="text-gray-600 mt-2">
              You haven't booked an appointment.
            </p>

            <Link
              href="/"
              className="inline-block mt-6 bg-[#7d1235] text-white px-7 py-3 rounded-full"
            >
              Book Appointment
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 mt-10">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="bg-white rounded-3xl p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div>
                    <h2 className="text-2xl font-serif text-[#7d1235]">
                      {appointment.service}
                    </h2>

                    <p className="mt-2 text-gray-600">
                      {appointment.date}
                    </p>

                    <p className="text-gray-600">
                       {appointment.time}
                    </p>
                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold capitalize ${
                      appointment.status ===
                      "confirmed"
                        ? "bg-green-100 text-green-700"
                        : appointment.status ===
                          "completed"
                        ? "bg-blue-100 text-blue-700"
                        : appointment.status ===
                          "cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}