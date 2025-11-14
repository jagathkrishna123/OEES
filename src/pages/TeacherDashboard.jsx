import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api'; // Adjust path as needed

function TeacherDashboard({ user }) {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    if (user) api.listExamsForTeacher(user.id).then(setExams);
  }, [user]);

  return (
    <div className="p-6 space-y-6">
      <div className="text-xl font-semibold">Assigned Exams</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {exams.map(ex => (
          <div
            key={ex.id}
            className="p-4 rounded-2xl shadow-lg bg-gradient-to-r from-white/80 to-white/60 border"
          >
            <div className="font-bold text-lg">
              {ex.name}{' '}
              <span className="text-sm text-gray-500">
                ({ex.department} - {ex.subject})
              </span>
            </div>
            <div className="mt-2">Date: {ex.date}</div>
            <div className="mt-3 flex gap-2">
              {ex.assignments
                .filter(a => a.teacherId === user.id)
                .map(a => (
                  <Link
                    key={a.teacherId}
                    to={`/evaluate/${ex.id}/${user.id}`}
                    className="bg-pink-500 text-white px-3 py-1 rounded"
                  >
                    Evaluate ({a.studentList.length})
                  </Link>
                ))}
            </div>
          </div>
        ))}
        {exams.length === 0 && (
          <div className="text-sm text-gray-500">No assigned exams yet.</div>
        )}
      </div>
    </div>
  );
}

export default TeacherDashboard;
