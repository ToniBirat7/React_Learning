import React from "react";
import { createPortal } from "react-dom";

const Portal = () => {
  return createPortal(
    <h1>This is another DOM</h1>,
    document.body.appendChild(document.createElement("div"))
  );
};

export default Portal;
