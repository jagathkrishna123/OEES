import React from "react";
import { Link } from "react-router-dom";
import DashboardCard from "../components/DashboardCard";
// import DashboardCard from "./DashboardCard";

function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardCard
        title="Create Exam"
        subtitle="Create exams and upload answer sheets"
      >
        <p className="text-sm">
          Use the admin dashboard to create exams, register teachers and upload
          scanned answer sheets.
        </p>
        <Link
          to="/admin"
          className="mt-3 inline-block bg-indigo-600 text-white px-3 py-1 rounded"
        >
          Go to Admin
        </Link>
      </DashboardCard>

      <DashboardCard title="Teacher Area" subtitle="View assigned evaluations">
        <p className="text-sm">
          Teachers can see assigned exams, evaluate and submit marks online.
        </p>
        <Link
          to="/login"
          className="mt-3 inline-block bg-pink-500 text-white px-3 py-1 rounded"
        >
          Login as Teacher
        </Link>
      </DashboardCard>

      <DashboardCard title="Modern UI" subtitle="Colorful, card-based layout">
        <p className="text-sm">
          Built with React + Tailwind. Mock backend uses localStorage so you can
          test flows quickly.
        </p>
      </DashboardCard>
    </div>
  );
}

export default Home;
