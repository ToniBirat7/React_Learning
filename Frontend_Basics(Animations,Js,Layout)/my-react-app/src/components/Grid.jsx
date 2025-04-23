import React from "react";

const Grid = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 h-auto w-full my-10">
        <div className="h-50 w-50 rounded-full bg-blue-500 text-center">1</div>
        <div className="h-50 w-50 rounded-full bg-orange-500 text-center">
          2
        </div>
        <div className="h-50 w-50 rounded-full bg-green-500 text-center">3</div>
        <div className="h-50 w-50 rounded-full bg-purple-500 text-center">
          4
        </div>
        <div className="h-50 w-50 rounded-full bg-red-500 text-center col-span-2">
          5
        </div>
        <div className="h-50 w-50 rounded-full bg-pink-500 text-center">6</div>
      </div>
    </>
  );
};

export default Grid;
