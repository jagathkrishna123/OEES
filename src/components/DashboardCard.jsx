import React from "react";

function DashboardCard({ title, subtitle, children }) {
  return (
    <div className="p-4 rounded-2xl shadow-xl bg-white/80 backdrop-blur border border-white/30">
      <div className="font-semibold text-lg">{title}</div>
      <div className="text-sm text-gray-600">{subtitle}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default DashboardCard;
