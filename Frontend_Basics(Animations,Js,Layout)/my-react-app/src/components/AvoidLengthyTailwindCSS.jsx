import React from "react";

// In the below code we've used a lengthy tailwind class for the button
// It is very verbose and hard to read, in such cases we use Directives feature of Tailwind

// There are different directives in Tailwind i.e. Base, Components and Utilities

// Base is applied globally

// Components is applied to specific components

// Utilities is for individual Tailwind class for example if I want to modify justify-center then
// I will modify it inside the Utilities directive

// @apply is next Directive that insertes the TailwindCSS in the Native CSS class.

// In the index.css we've implemented all the directives example.

const AvoidLengthyTailwindCSS = () => {
  return (
    <section className="card flex-center">
      <div>
        <button className="btn">
          <p className="text-[30px] text-emerald-500">Click Me</p>
        </button>
      </div>
      <h1>Hello It's me Birat</h1>
    </section>
  );
};

export default AvoidLengthyTailwindCSS;
