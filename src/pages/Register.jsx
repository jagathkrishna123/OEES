import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; // make sure api.js is in src/api.js or adjust the path accordingly

function Register() {
  const [form, setForm] = useState({ name: '', department: '', subject: '', password: 'pass' });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.registerTeacher(form);
    alert('Registered. Wait for admin approval.');
    navigate('/login');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="bg-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-xl font-semibold">Teacher Registrationnn</h2>
        <form onSubmit={submit} className="mt-3 space-y-3">
          <input
            required
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full p-2 rounded border"
          />
          <input
            required
            placeholder="Department"
            value={form.department}
            onChange={e => setForm({ ...form, department: e.target.value })}
            className="w-full p-2 rounded border"
          />
          <input
            required
            placeholder="Subject"
            value={form.subject}
            onChange={e => setForm({ ...form, subject: e.target.value })}
            className="w-full p-2 rounded border"
          />
          <input
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="w-full p-2 rounded border"
          />
          <button className="w-full bg-indigo-600 text-white py-2 rounded">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
