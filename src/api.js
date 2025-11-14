// // src/api.js

// // Simulated delay to mimic network requests
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const api = {
//   // -----------------------
//   // 🧑 User Authentication
//   // -----------------------
//   async login(username, password) {
//     await delay(500);
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const user = users.find(
//       (u) => u.username === username && u.password === password
//     );
//     if (!user) throw new Error("Invalid credentials");
//     return user;
//   },

//   async register(newUser) {
//     await delay(500);
//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     if (users.some((u) => u.username === newUser.username)) {
//       throw new Error("User already exists");
//     }
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));
//     return newUser;
//   },

//   // -----------------------
//   // 🧑‍🏫 Teacher / Exam Data
//   // -----------------------
//   async listTeachers() {
//     await delay(300);
//     return JSON.parse(localStorage.getItem("teachers") || "[]");
//   },

//   async approveTeacher(id) {
//     await delay(300);
//     const teachers = JSON.parse(localStorage.getItem("teachers") || "[]");
//     const teacher = teachers.find((t) => t.id === id);
//     if (!teacher) throw new Error("Teacher not found");
//     teacher.approved = true;
//     localStorage.setItem("teachers", JSON.stringify(teachers));
//     return teacher;
//   },

//   async createExam(examData) {
//     await delay(300);
//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");
//     const id = "exam_" + (exams.length + 1);
//     const newExam = { id, assignments: [], ...examData };
//     exams.push(newExam);
//     localStorage.setItem("exams", JSON.stringify(exams));
//     return newExam;
//   },

//   async getExamById(examId) {
//     await delay(300);
//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");
//     return exams.find((e) => e.id === examId) || null;
//   },

//   async listExams() {
//     await delay(300);
//     return JSON.parse(localStorage.getItem("exams") || "[]");
//   },

//   // ✅ NEW FUNCTION — used in TeacherDashboard
//   async listExamsForTeacher(teacherId) {
//     await delay(300);
//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");

//     // Only exams assigned to this teacher
//     const filtered = exams.filter((exam) =>
//       exam.assignments?.some((a) => a.teacherId === teacherId)
//     );

//     return filtered.map((exam) => ({
//       ...exam,
//       assignedStudents:
//         exam.assignments.find((a) => a.teacherId === teacherId)?.studentList ||
//         [],
//     }));
//   },

//   // -----------------------
//   // 📄 Assignment Handling
//   // -----------------------
//   // async uploadAnswerSheets(examId, { teacherId, studentList }) {
//   //   await delay(300);
//   //   const exams = JSON.parse(localStorage.getItem("exams") || "[]");
//   //   const exam = exams.find((e) => e.id === examId);
//   //   if (!exam) throw new Error("Exam not found");

//   //   if (!exam.assignments) exam.assignments = [];
//   //   exam.assignments.push({ teacherId, studentList });

//   //   localStorage.setItem("exams", JSON.stringify(exams));
//   //   return exam;
//   // },
//   async uploadAnswerSheets(examId, { teacherId, studentList }) {
//   await delay(300);
//   const exams = JSON.parse(localStorage.getItem("exams") || "[]");

//   const exam = exams.find((e) => e.id === examId.trim());
//   if (!exam) throw new Error("Exam not found");

//   if (!exam.assignments) exam.assignments = [];
//   exam.assignments.push({
//     teacherId: teacherId.trim(),
//     studentList,
//   });

//   localStorage.setItem("exams", JSON.stringify(exams));
//   return exam;
// }
//   // -----------------------
//   // 🧾 Evaluation Submission
//   // -----------------------
//   async submitEvaluation(examId, teacherId, roll, marksPerQuestion) {
//     await delay(400);
//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");
//     const exam = exams.find((e) => e.id === examId);
//     if (!exam) throw new Error("Exam not found");

//     const assignment = exam.assignments.find((a) => a.teacherId === teacherId);
//     if (!assignment) throw new Error("Assignment not found");

//     const student = assignment.studentList.find((s) => s.roll === roll);
//     if (!student) throw new Error("Student not found");

//     const total = Object.values(marksPerQuestion).reduce(
//       (a, b) => a + (Number(b) || 0),
//       0
//     );

//     student.evaluation = {
//       marksPerQuestion,
//       total,
//       submittedAt: new Date().toISOString(),
//     };

//     localStorage.setItem("exams", JSON.stringify(exams));
//     return student.evaluation;
//   },
// };

// export default api;


// src/api.js

// Simulated delay to mimic network requests
//.........................................................................................................................................................................................................................................................
//###########################################################################################################################################################################################################################################################################

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const api = {

//   // -----------------------
//   // 🧑 User Authentication
//   // -----------------------
//   async login(username, password) {
//     await delay(500);

//     const users = JSON.parse(localStorage.getItem("users") || "[]");
//     const user = users.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (!user) throw new Error("Invalid credentials");
//     return user;
//   },

//   async register(newUser) {
//     await delay(500);

//     const users = JSON.parse(localStorage.getItem("users") || "[]");

//     if (users.some((u) => u.username === newUser.username)) {
//       throw new Error("User already exists");
//     }

//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));
//     return newUser;
//   },

//   // -----------------------
//   // 🧑‍🏫 Teacher / Exam Data
//   // -----------------------
//   async listTeachers() {
//     await delay(300);
//     return JSON.parse(localStorage.getItem("teachers") || "[]");
//   },

//   async approveTeacher(id) {
//     await delay(300);

//     const teachers = JSON.parse(localStorage.getItem("teachers") || "[]");
//     const teacher = teachers.find((t) => t.id === id);

//     if (!teacher) throw new Error("Teacher not found");

//     teacher.approved = true;
//     localStorage.setItem("teachers", JSON.stringify(teachers));

//     return teacher;
//   },

//   async createExam(examData) {
//     await delay(300);

//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");

//     const id = "exam_" + (exams.length + 1);
//     const newExam = {
//       id,
//       assignments: [],
//       ...examData,
//     };

//     exams.push(newExam);
//     localStorage.setItem("exams", JSON.stringify(exams));

//     return newExam;
//   },

//   async getExamById(examId) {
//     await delay(300);

//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");
//     return exams.find((e) => e.id === examId.trim()) || null;
//   },

//   async listExams() {
//     await delay(300);
//     return JSON.parse(localStorage.getItem("exams") || "[]");
//   },

//   // -----------------------
//   // 🆕 Exams Assigned to Teacher
//   // -----------------------
//   async listExamsForTeacher(teacherId) {
//     await delay(300);

//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");

//     const filtered = exams.filter((exam) =>
//       exam.assignments?.some((a) => a.teacherId === teacherId)
//     );

//     return filtered.map((exam) => ({
//       ...exam,
//       assignedStudents:
//         exam.assignments.find((a) => a.teacherId === teacherId)?.studentList ||
//         [],
//     }));
//   },

//   // -----------------------
//   // 📄 Upload Answer Sheets
//   // -----------------------
//   async uploadAnswerSheets(examId, { teacherId, studentList }) {
//     await delay(300);

//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");

//     const cleanedExamId = examId.trim();
//     const cleanedTeacherId = teacherId.trim();

//     const exam = exams.find((e) => e.id === cleanedExamId);

//     if (!exam) {
//       console.error("Available exams:", exams.map((e) => e.id));
//       throw new Error("Exam not found");
//     }

//     if (!exam.assignments) exam.assignments = [];

//     exam.assignments.push({
//       teacherId: cleanedTeacherId,
//       studentList,
//     });

//     localStorage.setItem("exams", JSON.stringify(exams));
//     return exam;
//   },

//   // -----------------------
//   // 🧾 Submit Evaluation
//   // -----------------------
//   async submitEvaluation(examId, teacherId, roll, marksPerQuestion) {
//     await delay(400);

//     const exams = JSON.parse(localStorage.getItem("exams") || "[]");
//     const exam = exams.find((e) => e.id === examId.trim());

//     if (!exam) throw new Error("Exam not found");

//     const assignment = exam.assignments.find(
//       (a) => a.teacherId === teacherId.trim()
//     );

//     if (!assignment) throw new Error("Assignment not found");

//     const student = assignment.studentList.find((s) => s.roll === roll);

//     if (!student) throw new Error("Student not found");

//     const total = Object.values(marksPerQuestion).reduce(
//       (a, b) => a + (Number(b) || 0),
//       0
//     );

//     student.evaluation = {
//       marksPerQuestion,
//       total,
//       submittedAt: new Date().toISOString(),
//     };

//     localStorage.setItem("exams", JSON.stringify(exams));

//     return student.evaluation;
//   },
// };

// export default api;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {

  // -----------------------
  // 🧑 User Authentication
  // -----------------------
  async login(username, password) {
    await delay(500);

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) throw new Error("Invalid credentials");
    return user;
  },

  async register(newUser) {
    await delay(500);

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.username === newUser.username)) {
      throw new Error("User already exists");
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return newUser;
  },

  // -----------------------
  // 🆕 Teacher Registration
  // -----------------------
  async registerTeacher(newTeacher) {
    await delay(500);

    const teachers = JSON.parse(localStorage.getItem("teachers") || "[]");

    // auto generate teacher id
    const id = "teacher_" + (teachers.length + 1);

    const teacherData = {
      id,
      approved: false,
      ...newTeacher,
    };

    teachers.push(teacherData);
    localStorage.setItem("teachers", JSON.stringify(teachers));

    return teacherData;
  },

  // -----------------------
  // 🧑‍🏫 Teacher / Exam Data
  // -----------------------
  async listTeachers() {
    await delay(300);
    return JSON.parse(localStorage.getItem("teachers") || "[]");
  },

  async approveTeacher(id) {
    await delay(300);

    const teachers = JSON.parse(localStorage.getItem("teachers") || "[]");
    const teacher = teachers.find((t) => t.id === id);

    if (!teacher) throw new Error("Teacher not found");

    teacher.approved = true;
    localStorage.setItem("teachers", JSON.stringify(teachers));

    return teacher;
  },

  async createExam(examData) {
    await delay(300);

    const exams = JSON.parse(localStorage.getItem("exams") || "[]");

    const id = "exam_" + (exams.length + 1);
    const newExam = {
      id,
      assignments: [],
      ...examData,
    };

    exams.push(newExam);
    localStorage.setItem("exams", JSON.stringify(exams));

    return newExam;
  },

  async getExamById(examId) {
    await delay(300);

    const exams = JSON.parse(localStorage.getItem("exams") || "[]");
    return exams.find((e) => e.id === examId.trim()) || null;
  },

  async listExams() {
    await delay(300);
    return JSON.parse(localStorage.getItem("exams") || "[]");
  },

  // -----------------------
  // 🆕 Exams Assigned to a Teacher
  // -----------------------
  async listExamsForTeacher(teacherId) {
    await delay(300);

    const exams = JSON.parse(localStorage.getItem("exams") || "[]");

    const filtered = exams.filter((exam) =>
      exam.assignments?.some((a) => a.teacherId === teacherId)
    );

    return filtered.map((exam) => ({
      ...exam,
      assignedStudents:
        exam.assignments.find((a) => a.teacherId === teacherId)?.studentList ||
        [],
    }));
  },

  // -----------------------
  // 📄 Upload Answer Sheets
  // -----------------------
  async uploadAnswerSheets(examId, { teacherId, studentList }) {
    await delay(300);

    const exams = JSON.parse(localStorage.getItem("exams") || "[]");

    const cleanedExamId = examId.trim();
    const cleanedTeacherId = teacherId.trim();

    const exam = exams.find((e) => e.id === cleanedExamId);

    if (!exam) {
      console.error("Available exams:", exams.map((e) => e.id));
      throw new Error("Exam not found");
    }

    if (!exam.assignments) exam.assignments = [];

    exam.assignments.push({
      teacherId: cleanedTeacherId,
      studentList,
    });

    localStorage.setItem("exams", JSON.stringify(exams));
    return exam;
  },

  // -----------------------
  // 🧾 Evaluation Submission
  // -----------------------
  async submitEvaluation(examId, teacherId, roll, marksPerQuestion) {
    await delay(400);

    const exams = JSON.parse(localStorage.getItem("exams") || "[]");
    const exam = exams.find((e) => e.id === examId.trim());

    if (!exam) throw new Error("Exam not found");

    const assignment = exam.assignments.find(
      (a) => a.teacherId === teacherId.trim()
    );

    if (!assignment) throw new Error("Assignment not found");

    const student = assignment.studentList.find((s) => s.roll === roll);

    if (!student) throw new Error("Student not found");

    const total = Object.values(marksPerQuestion).reduce(
      (a, b) => a + (Number(b) || 0),
      0
    );

    student.evaluation = {
      marksPerQuestion,
      total,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem("exams", JSON.stringify(exams));

    return student.evaluation;
  },
};

export default api;
