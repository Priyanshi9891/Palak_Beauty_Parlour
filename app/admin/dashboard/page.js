"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import AdminSidebar from "@/components/admin/AdminSidebar";
import DashboardStats from "@/components/admin/DashboardStats";
import AppointmentTable from "@/components/admin/AppointmentTable";

export default function AdminDashboard() {
  const {
    data: session,
    status,
  } = useSession();

  const router = useRouter();

  const [appointments, setAppointments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }

    if (
      status === "authenticated" &&
      session?.user?.role !== "admin"
    ) {
      router.push("/");
    }
  }, [status, session, router]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);

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

  useEffect(() => {
    if (
      status === "authenticated" &&
      session?.user?.role === "admin"
    ) {
      fetchAppointments();
    }
  }, [status, session]);

  const updateAppointment = async (
    id,
    status
  ) => {
    try {
      const response = await fetch(
        `/api/appointments/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message ||
            "Failed to update appointment"
        );
        return;
      }

      setAppointments((previous) =>
        previous.map((appointment) =>
          appointment._id === id
            ? {
                ...appointment,
                status,
              }
            : appointment
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to update appointment");
    }
  };

  const deleteAppointment = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(
        `/api/appointments/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.message ||
            "Failed to delete appointment"
        );
        return;
      }

      setAppointments((previous) =>
        previous.filter(
          (appointment) =>
            appointment._id !== id
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete appointment");
    }
  };

  if (
    status === "loading" ||
    loading
  ) {
    return (
      <main className="min-h-screen bg-[#fff8f2] flex items-center justify-center">
        <p className="text-[#7d1235] font-semibold">
          Loading admin dashboard...
        </p>
      </main>
    );
  }

  if (
    !session ||
    session.user.role !== "admin"
  ) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#fff8f2] md:flex">
      <AdminSidebar />

      <section className="flex-1 p-5 md:p-8 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7d1235] font-semibold">
              Admin Dashboard
            </p>

            <h1 className="text-4xl md:text-5xl font-serif mt-2">
              Welcome, Admin
            </h1>

            <p className="text-gray-600 mt-2">
              Manage all customer appointments from
              here.
            </p>
          </div>

          <DashboardStats
            appointments={appointments}
          />

          <div className="mt-10">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-2xl font-serif">
                  All Appointments
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  {appointments.length} appointment
                  {appointments.length !== 1
                    ? "s"
                    : ""}
                </p>
              </div>

              <button
                onClick={fetchAppointments}
                className="px-5 py-2.5 rounded-full bg-[#7d1235] text-white"
              >
                Refresh
              </button>
            </div>

            <AppointmentTable
              appointments={appointments}
              onUpdate={updateAppointment}
              onDelete={deleteAppointment}
            />
          </div>
        </div>
      </section>
    </main>
  );
}