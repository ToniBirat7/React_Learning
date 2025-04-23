import React from "react";
import "../css/flexbox.css";

function Flexbox() {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 h-450 w-full">
        <div className="h-50 w-50 rounded-full bg-blue-500 text-center">1</div>
        <div className="h-50 w-50 rounded-full bg-orange-500 text-center">
          2
        </div>
        <div className="h-50 w-50 rounded-full bg-green-500 text-center">3</div>
        <div className="h-50 w-50 rounded-full bg-purple-500 text-center">
          4
        </div>
        <div className="h-50 w-50 rounded-full bg-red-500 text-center">5</div>
        <div className="h-50 w-50 rounded-full bg-pink-500 text-center">6</div>
      </div>
    </>
  );
}

export default Flexbox;
