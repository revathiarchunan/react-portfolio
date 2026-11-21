
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
  () => localStorage.getItem("portfolio-theme") || "dark"
);

  const toggleTheme = () => {
  const newTheme = theme === "dark" ? "light" : "dark";

  setTheme(newTheme);
  localStorage.setItem("portfolio-theme", newTheme);
};

  return (
    <div className={theme}>
      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/projects"
          element={<ProjectsPage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="/contact"
          element={<ContactPage theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </div>
  );
}

export default App;
