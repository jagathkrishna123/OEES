import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api"; // adjust path if needed
import EvalEditor from "../components/EvalEditor";


function EvaluatePage() {
  const { examId, teacherId } = useParams();
  const [exam, setExam] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.getExamById(examId).then(setExam);
  }, [examId]);

  if (!exam) return <div className="p-6">Loading...</div>;

  const assignment = exam.assignments.find((a) => a.teacherId === teacherId);
  if (!assignment)
    return <div className="p-6">No assignment found for this teacher.</div>;

  return (
    <div className="p-6 space-y-4">
      <div className="text-lg font-semibold">{exam.name} - Students</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-1 space-y-2">
          {assignment.studentList.map((s) => (
            <div
              key={s.roll}
              className={`p-3 rounded-lg border cursor-pointer ${
                selected === s.roll ? "bg-indigo-50" : ""
              }`}
              onClick={() => setSelected(s.roll)}
            >
              <div className="font-medium">{s.name}</div>
              <div className="text-sm text-gray-500">Roll: {s.roll}</div>
              <div className="text-xs text-gray-400">
                {s.evaluation ? "Evaluated" : "Pending"}
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-2 bg-white p-4 rounded-2xl shadow-lg">
          {!selected && (
            <div className="text-gray-500">Select a student to evaluate.</div>
          )}
          {selected && (
            <EvalEditor exam={exam} assignment={assignment} roll={selected} />
          )}
        </div>
      </div>
    </div>
  );
}

export default EvaluatePage;
