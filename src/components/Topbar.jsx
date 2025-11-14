// import React from 'react';
// export default function Topbar({user,onLogout}){
//   return(<div className='w-full bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 text-white p-4 flex justify-between'>
//     <div className='text-xl font-bold'>SmartEval</div>
//     {user?<button onClick={onLogout} className='bg-white/20 px-3 py-1 rounded'>Logout</button>:null}
//   </div>);
// }

import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Topbar({ user, onLogout }) {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-pink-500 to-yellow-400 text-white p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold">SmartEval</div>
        <div className="text-sm opacity-90">Online Exam Evaluation System</div>
      </div>
      <div className="flex items-center gap-3">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <FaUserCircle />
              <div className="text-sm">
                {user.name} ({user.role})
              </div>
            </div>
            <button
              onClick={onLogout}
              className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Topbar;
