import { useEffect } from "react";

const useDocumentTitle = (count) => {
  useEffect(() => {
    document.title = `Count ${count}`;
    return () => {
      console.log("Cleaned");
    };
  }, [count]);
};

export default useDocumentTitle;
