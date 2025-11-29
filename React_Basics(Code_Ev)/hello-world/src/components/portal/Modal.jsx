import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

const Modal = () => {
  const container = usePortal();
  console.log(container);

  return createPortal(<h1>This is another DOM</h1>, container);
};

export default Modal;
