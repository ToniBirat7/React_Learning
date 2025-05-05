import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-auto flex flex-row space-x-10 flex-wrap mb-5">
      <button className="bg-sky-500 hover:bg-sky-700">
        <Link to="/dashboard">Go to Dashboard</Link>
      </button>
      <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-sky-700 w-50">
        <Link to="/">Go to Home Page</Link>
      </button>
    </div>
  );
};

export default Nav;
