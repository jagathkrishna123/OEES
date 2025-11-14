// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
// import api from '../api';

// function Admin() {
//   const [teachers, setTeachers] = useState([]);
//   const [examForm, setExamForm] = useState({
//     name: '',
//     department: '',
//     subject: '',
//     date: '',
//     totalMarks: 100,
//   });
//   const [uploadState, setUploadState] = useState({
//     examId: '',
//     teacherId: '',
//     studentsText: '',
//   });

//   // Load teachers
//   useEffect(() => {
//     api.listTeachers().then(setTeachers);
//   }, []);

//   // Approve teacher
//   const approve = async (id) => {
//     await api.approveTeacher(id);
//     setTeachers(await api.listTeachers());
//   };

//   // Create exam
//   const createExam = async (e) => {
//     e.preventDefault();
//     const ex = await api.createExam(examForm);
//     alert('Exam created: ' + ex.id);
//     setExamForm({ name: '', department: '', subject: '', date: '', totalMarks: 100 });
//   };

//   // Upload answer sheets
//   const upload = async (e) => {
//     e.preventDefault();
//     const studentLines = uploadState.studentsText.split('\n').filter(Boolean);
//     const studentList = studentLines.map((line) => {
//       const [name, roll, image] = line.split('|').map((s) => s.trim());
//       return { name, roll, images: image ? [image] : [] };
//     });

//     await api.uploadAnswerSheets(uploadState.examId, {
//       teacherId: uploadState.teacherId,
//       studentList,
//     });

//     alert('Uploaded assignment');
//     setUploadState({ examId: '', teacherId: '', studentsText: '' });
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* 🧑 Teachers */}
//         <div>
//           <div className="mb-3 text-lg font-semibold">Teachers</div>
//           <div className="space-y-2">
//             {teachers.map((t, index) => (
//               <div
//                 key={t.id || t.name || index}
//                 className="flex items-center justify-between p-3 bg-gradient-to-r from-white/70 to-white/40 rounded-lg border"
//               >
//                 <div>
//                   <div className="font-medium">
//                     {t.name}{' '}
//                     <span className="text-xs text-gray-500">
//                       ({t.department} - {t.subject})
//                     </span>
//                   </div>
//                   <div className="text-sm">
//                     ID: {t.id}{' '}
//                     {t.approved ? (
//                       <FaCheckCircle className="inline text-green-600" />
//                     ) : (
//                       <FaTimesCircle className="inline text-red-600" />
//                     )}
//                   </div>
//                 </div>
//                 {!t.approved && (
//                   <button
//                     onClick={() => approve(t.id)}
//                     className="bg-green-500 text-white px-3 py-1 rounded"
//                   >
//                     Approve
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 📄 Create Exam */}
//         <div>
//           <div className="mb-3 text-lg font-semibold">Create Exam</div>
//           <form
//             onSubmit={createExam}
//             className="space-y-2 bg-white p-4 rounded-2xl shadow-lg"
//           >
//             <input
//               required
//               placeholder="Exam name"
//               value={examForm.name}
//               onChange={(e) => setExamForm({ ...examForm, name: e.target.value })}
//               className="w-full p-2 rounded border"
//             />
//             <input
//               placeholder="Department"
//               value={examForm.department}
//               onChange={(e) =>
//                 setExamForm({ ...examForm, department: e.target.value })
//               }
//               className="w-full p-2 rounded border"
//             />
//             <input
//               placeholder="Subject"
//               value={examForm.subject}
//               onChange={(e) =>
//                 setExamForm({ ...examForm, subject: e.target.value })
//               }
//               className="w-full p-2 rounded border"
//             />
//             <input
//               type="date"
//               value={examForm.date}
//               onChange={(e) =>
//                 setExamForm({ ...examForm, date: e.target.value })
//               }
//               className="w-full p-2 rounded border"
//             />
//             <input
//               type="number"
//               value={examForm.totalMarks}
//               onChange={(e) =>
//                 setExamForm({ ...examForm, totalMarks: e.target.value })
//               }
//               className="w-full p-2 rounded border"
//             />
//             <button className="w-full bg-pink-500 text-white py-2 rounded">
//               Create
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* 📤 Upload Answer Sheets */}
//       <div className="bg-white p-4 rounded-2xl shadow-lg">
//         <div className="font-semibold mb-2">Upload Answer Sheets (batch)</div>
//         <form onSubmit={upload} className="space-y-2">
//           <input
//             placeholder="Exam ID (e1...)"
//             value={uploadState.examId}
//             onChange={(e) =>
//               setUploadState({ ...uploadState, examId: e.target.value })
//             }
//             className="p-2 rounded border w-full"
//           />
//           <input
//             placeholder="Assign to Teacher ID (t1...)"
//             value={uploadState.teacherId}
//             onChange={(e) =>
//               setUploadState({ ...uploadState, teacherId: e.target.value })
//             }
//             className="p-2 rounded border w-full"
//           />
//           <textarea
//             placeholder="One student per line: Name | Roll | imageURL(optional)"
//             value={uploadState.studentsText}
//             onChange={(e) =>
//               setUploadState({ ...uploadState, studentsText: e.target.value })
//             }
//             className="w-full p-2 rounded border h-32"
//           />
//           <div className="text-sm text-gray-500">
//             Example: John Doe | 20CS001 | https://.../ans1.jpg
//           </div>
//           <button className="bg-indigo-600 text-white px-4 py-2 rounded">
//             Upload
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Admin;
import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import api from '../api';

function Admin() {
  const [teachers, setTeachers] = useState([]);
  const [examList, setExamList] = useState([]);

  const [examForm, setExamForm] = useState({
    name: '',
    department: '',
    subject: '',
    date: '',
    totalMarks: 100,
  });

  const [uploadState, setUploadState] = useState({
    examId: '',
    teacherId: '',
    studentsText: '',
  });

  // Load teachers and exams
  useEffect(() => {
    api.listTeachers().then(setTeachers);
    api.listExams().then(setExamList);
  }, []);

  // Approve teacher
  const approve = async (id) => {
    await api.approveTeacher(id);
    setTeachers(await api.listTeachers());
  };

  // Create exam
  const createExam = async (e) => {
    e.preventDefault();
    const ex = await api.createExam(examForm);

    alert('Exam created: ' + ex.id);

    setExamForm({
      name: '',
      department: '',
      subject: '',
      date: '',
      totalMarks: 100,
    });

    // refresh list
    setExamList(await api.listExams());
  };

  // Upload answer sheets
  const upload = async (e) => {
    e.preventDefault();

    if (!uploadState.examId) return alert("Select exam ID");
    if (!uploadState.teacherId) return alert("Select teacher ID");

    const studentLines = uploadState.studentsText.split('\n').filter(Boolean);
    const studentList = studentLines.map((line) => {
      const [name, roll, image] = line.split('|').map((s) => s.trim());
      return { name, roll, images: image ? [image] : [] };
    });

    await api.uploadAnswerSheets(uploadState.examId.trim(), {
      teacherId: uploadState.teacherId.trim(),
      studentList,
    });

    alert('Uploaded assignment');
    setUploadState({ examId: '', teacherId: '', studentsText: '' });
  };

  return (
    <div className="p-6 space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* 🧑 Teachers */}
        <div>
          <div className="mb-3 text-lg font-semibold">Teachers</div>
          <div className="space-y-2">
            {teachers.map((t, index) => (
              <div
                key={t.id || t.name || index}
                className="flex items-center justify-between p-3 bg-gradient-to-r from-white/70 to-white/40 rounded-lg border"
              >
                <div>
                  <div className="font-medium">
                    {t.name}{' '}
                    <span className="text-xs text-gray-500">
                      ({t.department} - {t.subject})
                    </span>
                  </div>
                  <div className="text-sm">
                    ID: {t.id}{' '}
                    {t.approved ? (
                      <FaCheckCircle className="inline text-green-600" />
                    ) : (
                      <FaTimesCircle className="inline text-red-600" />
                    )}
                  </div>
                </div>

                {!t.approved && (
                  <button
                    onClick={() => approve(t.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 📄 Create Exam */}
        <div>
          <div className="mb-3 text-lg font-semibold">Create Exam</div>
          <form
            onSubmit={createExam}
            className="space-y-2 bg-white p-4 rounded-2xl shadow-lg"
          >
            <input
              required
              placeholder="Exam name"
              value={examForm.name}
              onChange={(e) =>
                setExamForm({ ...examForm, name: e.target.value })
              }
              className="w-full p-2 rounded border"
            />

            <input
              placeholder="Department"
              value={examForm.department}
              onChange={(e) =>
                setExamForm({ ...examForm, department: e.target.value })
              }
              className="w-full p-2 rounded border"
            />

            <input
              placeholder="Subject"
              value={examForm.subject}
              onChange={(e) =>
                setExamForm({ ...examForm, subject: e.target.value })
              }
              className="w-full p-2 rounded border"
            />

            <input
              type="date"
              value={examForm.date}
              onChange={(e) =>
                setExamForm({ ...examForm, date: e.target.value })
              }
              className="w-full p-2 rounded border"
            />

            <input
              type="number"
              value={examForm.totalMarks}
              onChange={(e) =>
                setExamForm({ ...examForm, totalMarks: e.target.value })
              }
              className="w-full p-2 rounded border"
            />

            <button className="w-full bg-pink-500 text-white py-2 rounded">
              Create
            </button>
          </form>
        </div>
      </div>

      {/* 📤 Upload Answer Sheets */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <div className="font-semibold mb-2">Upload Answer Sheets (batch)</div>

        <form onSubmit={upload} className="space-y-2">

          {/* Exam Dropdown */}
          <select
            value={uploadState.examId}
            onChange={(e) =>
              setUploadState({ ...uploadState, examId: e.target.value })
            }
            className="p-2 rounded border w-full"
          >
            <option value="">Select Exam</option>
            {examList.map((ex) => (
              <option key={ex.id} value={ex.id}>
                {ex.name} — {ex.id}
              </option>
            ))}
          </select>

          {/* Teacher Dropdown */}
          <select
            value={uploadState.teacherId}
            onChange={(e) =>
              setUploadState({ ...uploadState, teacherId: e.target.value })
            }
            className="p-2 rounded border w-full"
          >
            <option value="">Assign to Teacher</option>
            {teachers
              .filter((t) => t.approved)
              .map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} — {t.id}
                </option>
              ))}
          </select>

          {/* Students List */}
          <textarea
            placeholder="One student per line: Name | Roll | imageURL(optional)"
            value={uploadState.studentsText}
            onChange={(e) =>
              setUploadState({ ...uploadState, studentsText: e.target.value })
            }
            className="w-full p-2 rounded border h-32"
          />

          <div className="text-sm text-gray-500">
            Example: John Doe | 20CS001 | https://.../ans1.jpg
          </div>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
