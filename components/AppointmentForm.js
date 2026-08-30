"use client";

import { useState } from "react";
import { X, CalendarDays } from "lucide-react";
import { useSession } from "next-auth/react";

const services = [
  "Bridal Makeup",
  "Party Makeup",
  "Hair Styling",
  "Facial & Skin Care",
  "Nail Art",
];

const times = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

export default function AppointmentForm({
  onClose,
}) {
  const { data: session } = useSession();

  const [form, setForm] = useState({
    name: session?.user?.name || "",
    phone: session?.user?.phone || "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (
      !form.name ||
      !form.phone ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      setMessage("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/appointments",
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
        setMessage(data.message || "Something went wrong");
        return;
      }

      setMessage(
        "Appointment booked successfully!"
      );

      setForm({
        name: session?.user?.name || "",
        phone: session?.user?.phone || "",
        service: "",
        date: "",
        time: "",
        message: "",
      });

      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error(error);
      setMessage("Unable to book appointment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 overflow-y-auto px-5 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-7 md:p-10 relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <p className="uppercase tracking-[0.2em] text-[#7d1235] text-sm font-semibold">
            Appointment
          </p>

          <h2 className="text-4xl font-serif mt-2">
            Book Your Visit
          </h2>

          <p className="text-gray-600 mt-3">
            Choose your service and preferred time.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Name *
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone *
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235]"
                placeholder="9876543210"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Select Service *
            </label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 bg-white outline-none focus:border-[#7d1235]"
            >
              <option value="">
                Choose a service
              </option>

              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Date *
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="absolute left-4 top-3.5 text-gray-500"
                />

                <input
                  type="date"
                  name="date"
                  min={
                    new Date()
                      .toISOString()
                      .split("T")[0]
                  }
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border rounded-xl pl-11 pr-4 py-3 outline-none focus:border-[#7d1235]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Time *
              </label>

              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 bg-white outline-none focus:border-[#7d1235]"
              >
                <option value="">
                  Choose time
                </option>

                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Message
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235] resize-none"
              placeholder="Anything you want us to know?"
            />
          </div>

          {message && (
            <div className="bg-[#fff3f6] text-[#7d1235] rounded-xl p-4 text-center">
              {message}
            </div>
          )}

          <button
            disabled={loading}
            className="w-full bg-[#7d1235] text-white py-4 rounded-full font-semibold hover:bg-[#4c0921] transition disabled:opacity-50"
          >
            {loading
              ? "BOOKING..."
              : "CONFIRM APPOINTMENT"}
          </button>
        </form>
      </div>
    </div>
  );
}