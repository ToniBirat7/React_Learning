import React from "react";
import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

const Modal = () => {
  const ref = usePortal();

  return createPortal(<h1>This is another DOM</h1>, ref);
};

export default Modal;
