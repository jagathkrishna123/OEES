import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import TeacherDashboard from "./pages/TeacherDashboard";
import EvaluatePage from "./pages/EvaluatePage";
import ResultsPage from "./pages/ResultsPage";
import NavigateToLogin from "./components/NavigateToLogin";
import api from "./api";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.listTeachers();
  }, []);

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Topbar user={user} onLogout={logout} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              user && user.role === "controller" ? (
                <Admin />
              ) : (
                <NavigateToLogin />
              )
            }
          />
          <Route
            path="/teacher"
            element={
              user && user.role === "teacher" ? (
                <TeacherDashboard user={user} />
              ) : (
                <NavigateToLogin />
              )
            }
          />
          <Route
            path="/evaluate/:examId/:teacherId"
            element={<EvaluatePage />}
          />
          <Route
            path="/results/:examId/:teacherId/:roll"
            element={<ResultsPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
