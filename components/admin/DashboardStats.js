export default function DashboardStats({
  appointments,
}) {
  const total = appointments.length;

  const pending = appointments.filter(
    (a) => a.status === "pending"
  ).length;

  const confirmed = appointments.filter(
    (a) => a.status === "confirmed"
  ).length;

  const completed = appointments.filter(
    (a) => a.status === "completed"
  ).length;

  const cancelled = appointments.filter(
    (a) => a.status === "cancelled"
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
    },
    {
      title: "Pending",
      value: pending,
    },
    {
      title: "Confirmed",
      value: confirmed,
    },
    {
      title: "Completed",
      value: completed,
    },
    {
      title: "Cancelled",
      value: cancelled,
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-2xl p-5 shadow-sm"
        >
          <p className="text-gray-500 text-sm">
            {stat.title}
          </p>

          <p className="text-3xl font-bold text-[#7d1235] mt-2">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}