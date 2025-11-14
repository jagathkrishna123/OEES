import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; // adjust if your api file is elsewhere

function EvalEditor({ exam, assignment, roll }) {
  const student = assignment.studentList.find((s) => s.roll === roll);
  const [marks, setMarks] = useState({});
  const navigate = useNavigate();

  const questionsCount = 5; // sample, can be dynamic later

  useEffect(() => {
    if (student && student.evaluation)
      setMarks(student.evaluation.marksPerQuestion);
  }, [student]);

  const setMark = (i, v) => setMarks((prev) => ({ ...prev, ["q" + i]: v }));

  const submit = async () => {
    await api.submitEvaluation(exam.id, assignment.teacherId, roll, marks);
    alert("Submitted");
    navigate(`/results/${exam.id}/${assignment.teacherId}/${roll}`);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Question Paper */}
        <div className="p-2 border rounded">
          <div className="font-semibold mb-2">Question Paper</div>
          <div className="h-64 overflow-auto bg-gray-50 p-2">
            [Question paper image or content here]
          </div>
        </div>

        {/* Answer Sheet */}
        <div className="p-2 border rounded">
          <div className="font-semibold mb-2">
            Answer Sheet - {student.name}
          </div>
          <div className="h-64 overflow-auto bg-gray-50 p-2">
            {student.images && student.images.length ? (
              student.images.map((u, i) => (
                <img key={i} src={u} alt="ans" className="mb-2 max-h-40" />
              ))
            ) : (
              <div className="text-sm text-gray-400">
                No image provided. Use upload in admin.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Marks Section */}
      <div className="p-3 bg-gradient-to-r from-white/80 to-white/60 rounded-lg border">
        <div className="font-semibold">Mark each question</div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mt-2">
          {Array.from({ length: questionsCount }).map((_, i) => (
            <div key={i} className="p-2 bg-white rounded shadow-sm">
              <div className="text-sm font-medium">Q{i + 1}</div>
              <input
                type="number"
                value={marks["q" + (i + 1)] || ""}
                onChange={(e) => setMark(i + 1, e.target.value)}
                className="w-full mt-2 p-2 rounded border"
              />
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg">
            Total:{" "}
            {Object.values(marks).reduce(
              (a, b) => a + (Number(b) || 0),
              0
            )}
          </div>
          <button
            onClick={submit}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EvalEditor;
