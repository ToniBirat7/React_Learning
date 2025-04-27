import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Flexbox from "./components/Flexbox.jsx";
import Tailwind from "./components/Tailwind.jsx";
import Grid from "./components/Grid.jsx";
import MediaQuery from "./components/MediaQuery.jsx";
import CustomeStyling from "./components/CustomeStyling.jsx";
import AvoidLengthyTailwindCSS from "./components/AvoidLengthyTailwindCSS.jsx";
import { SwitchDemo } from "./components/Shadcnui.jsx";
import OverrideDefaultAccent from "./components/OverrideDefaultAccent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Flexbox></Flexbox> */}
    {/* <Tailwind></Tailwind> */}
    {/* <Grid></Grid> */}
    {/* <MediaQuery></MediaQuery> */}
    {/* <CustomeStyling></CustomeStyling> */}
    {/* <AvoidLengthyTailwindCSS></AvoidLengthyTailwindCSS> */}
    {/* <SwitchDemo></SwitchDemo> */}
    <OverrideDefaultAccent></OverrideDefaultAccent>
  </StrictMode>
);
