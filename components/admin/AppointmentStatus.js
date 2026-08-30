"use client";

export default function AppointmentStatus({
  appointment,
  onUpdate,
}) {
  const handleChange = async (e) => {
    const status = e.target.value;

    await onUpdate(
      appointment._id,
      status
    );
  };

  return (
    <select
      value={appointment.status}
      onChange={handleChange}
      className="border rounded-lg px-3 py-2 text-sm bg-white"
    >
      <option value="pending">
        Pending
      </option>

      <option value="confirmed">
        Confirmed
      </option>

      <option value="completed">
        Completed
      </option>

      <option value="cancelled">
        Cancelled
      </option>
    </select>
  );
}
