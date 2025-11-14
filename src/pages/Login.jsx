import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api"; // ⬅️ adjust this import path if your `api.js` file is in a different folder

function Login({ onLogin }) {
  const [role, setRole] = useState("teacher");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    if (role === "controller") {
      if (id === "admin" && password === "admin") {
        onLogin({ role: "controller", name: "Exam Controller", id: "admin" });
        navigate("/admin");
      } else {
        alert("Controller: use id=admin password=admin");
      }
    } else {
      // teacher login (mock)
      const teachers = await api.listTeachers();
      const t = teachers.find(
        (x) => x.id === id && x.password === password && x.approved
      );
      if (t) {
        onLogin({ role: "teacher", name: t.name, id: t.id });
        navigate("/teacher");
      } else {
        alert(
          "Invalid teacher credentials or not approved yet. Use t1/pass for approved demo."
        );
      }
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="bg-gradient-to-r from-pink-400 to-indigo-500 p-6 rounded-3xl text-white shadow-2xl">
        <h2 className="text-2xl font-bold">Login</h2>
        <form onSubmit={handle} className="mt-4 space-y-3">
          <div>
            <label className="text-sm">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 p-2 rounded bg-white/20"
            >
              <option value="teacher">Teacher</option>
              <option value="controller">Exam Controller</option>
            </select>
          </div>
          <div>
            <label className="text-sm">ID</label>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full mt-1 p-2 rounded"
              placeholder={role === "controller" ? "admin" : "t1"}
            />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 rounded"
              placeholder="pass"
            />
          </div>
          <button className="w-full bg-white text-pink-600 font-semibold py-2 rounded">
            Login
          </button>
          <div className="text-xs opacity-80">
            Controller demo credentials: <b>admin/admin</b>
          </div>
        </form>
      </div>

      <div className="mt-4 text-center">
        <Link to="/register" className="text-indigo-600 font-medium">
          Teacher registration
        </Link>
      </div>
    </div>
  );
}

export default Login;
