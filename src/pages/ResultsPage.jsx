import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api"; // adjust path as needed

function ResultsPage() {
  const { examId, teacherId, roll } = useParams();
  const [exam, setExam] = useState(null);

  useEffect(() => {
    api.getExamById(examId).then(setExam);
  }, [examId]);

  if (!exam) return <div className="p-6">Loading...</div>;

  const assignment = exam.assignments.find((a) => a.teacherId === teacherId);
  const student = assignment?.studentList.find((s) => s.roll === roll);

  if (!student || !student.evaluation)
    return <div className="p-6">No result available.</div>;

  const { marksPerQuestion, total } = student.evaluation;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-xl font-semibold mb-4">
          Result - {student.name}
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="py-2 px-3 font-medium">Question</th>
              <th className="py-2 px-3 font-medium">Marks</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(marksPerQuestion).map(([q, m]) => (
              <tr key={q} className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">{q.toUpperCase()}</td>
                <td className="py-2 px-3">{m}</td>
              </tr>
            ))}
            <tr className="font-bold bg-indigo-50">
              <td className="py-2 px-3">Total</td>
              <td className="py-2 px-3">{total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultsPage;
