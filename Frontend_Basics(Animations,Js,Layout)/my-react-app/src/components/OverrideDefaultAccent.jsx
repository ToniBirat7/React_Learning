import React from "react";

// Accent Color : Default color for tags

// Fluid Text : Change the text size based on the viewport

// File : To override the default file type it is hetic but with TailwindCSS it's easy

// Less JavaScript: Imagine the headache to manage the state of the Accordion i.e. FAQ Section but Tailwind makes it easy with datials and summary tag

const OverrideDefaultAccent = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-br from-amber-700 via-amber-600 to-amber-500 p-8">
      <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 w-full text-center flex flex-col">
        <div>
          <h1 className="text-[min(10vw,70px)] font-bold text-amber-800 dark:text-white">
            Welcome! This is Dynamically Changing Text Based on the Viewport
          </h1>
          <h1>This is Static Text</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="bg-amber-100 w-20 h-10 rounded-2xl border-1">
            Click Me
          </button>
          <label htmlFor="box">
            <input type="checkbox" id="box" className="mx-2" />
            Browser Default
          </label>
          <label htmlFor="box2">
            <input id="box2" type="checkbox" className="accent-pink-500 mx-2" />
            Changed Accent
          </label>
          <label htmlFor="file">
            <input
              id="file"
              type="file"
              className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-200"
            />{" "}
          </label>
        </div>
      </section>
    </main>
  );
};

export default OverrideDefaultAccent;
