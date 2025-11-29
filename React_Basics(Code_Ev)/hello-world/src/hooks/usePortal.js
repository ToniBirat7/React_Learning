import { useEffect, useRef, useState } from "react";

const usePortal = () => {
  const ref = useRef(null);

  if (!ref.current) ref.current = document.createElement("div");

  useEffect(() => {
    const el = ref.current;
    document.body.appendChild(el);
    return () => document.body.removeChild(el);
  }, []);

  ref.current;
};

export default usePortal;
