import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col space-y-4 w-auto justify-center items-center ">
      <h1 className="box-decoration-slice md:box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white font-mono shadow-xl/20">
        We are in the Dashboard Page
      </h1>
    </div>
  );
};

export default Dashboard;
