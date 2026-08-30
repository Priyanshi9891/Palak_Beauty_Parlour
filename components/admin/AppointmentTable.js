"use client";

import AppointmentStatus from "./AppointmentStatus";

export default function AppointmentTable({
  appointments,
  onUpdate,
  onDelete,
}) {
  if (appointments.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center">
        <h2 className="text-xl font-semibold">
          No appointments found
        </h2>

        <p className="text-gray-500 mt-2">
          New appointments will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead className="bg-[#fff8f2]">
            <tr>
              <th className="text-left p-4">
                Customer
              </th>

              <th className="text-left p-4">
                Phone
              </th>

              <th className="text-left p-4">
                Service
              </th>

              <th className="text-left p-4">
                Date
              </th>

              <th className="text-left p-4">
                Time
              </th>

              <th className="text-left p-4">
                Status
              </th>

              <th className="text-left p-4">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr
                key={appointment._id}
                className="border-t"
              >
                <td className="p-4 font-semibold">
                  {appointment.name}
                </td>

                <td className="p-4">
                  {appointment.phone}
                </td>

                <td className="p-4">
                  {appointment.service}
                </td>

                <td className="p-4">
                  {appointment.date}
                </td>

                <td className="p-4">
                  {appointment.time}
                </td>

                <td className="p-4">
                  <AppointmentStatus
                    appointment={appointment}
                    onUpdate={onUpdate}
                  />
                </td>

                <td className="p-4">
                  <button
                    onClick={() =>
                      onDelete(
                        appointment._id
                      )
                    }
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}