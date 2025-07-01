import HomePage from "./components/Routing/HomePage";
import Dashboard from "./components/Routing/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/Routing/NotFound";
import Nav from "./components/Routing/Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
