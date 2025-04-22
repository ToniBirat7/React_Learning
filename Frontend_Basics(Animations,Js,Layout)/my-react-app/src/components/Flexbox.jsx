import React from "react";
import "../css/flexbox.css";

function Flexbox() {
  return (
    <>
      <div className="flex justify-center items-center space-x-6 h-200 w-full">
        <div className="h-50 w-50 rounded-full bg-blue-500">1</div>
        <div className="h-50 w-50 rounded-full bg-orange-500">2</div>
        <div className="h-50 w-50 rounded-full bg-green-500">3</div>
        <div className="h-50 w-50 rounded-full bg-purple-500">4</div>
        <div className="h-50 w-50 rounded-full bg-red-500">5</div>
        <div className="h-50 w-50 rounded-full bg-pink-500">6</div>
      </div>
    </>
  );
}

export default Flexbox;
