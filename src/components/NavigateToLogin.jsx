import React from "react";
import { Link } from "react-router-dom";

function NavigateToLogin() {
  return (
    <div className="p-6 text-center">
      <div className="text-lg font-medium mb-2">Access Denied</div>
      <Link to="/login" className="text-indigo-600 underline">
        Login
      </Link>
    </div>
  );
}

export default NavigateToLogin;
