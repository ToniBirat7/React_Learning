import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Flexbox from "./components/Flexbox.jsx";
import Tailwind from "./components/Tailwind.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Flexbox></Flexbox>
    {/* <Tailwind></Tailwind> */}
  </StrictMode>
);
