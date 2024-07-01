import { useState } from "react";
import AboutPage from "./pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProjectPage from "./pages/projects";
import { THEME } from "./constants";
import ThemeWidget from "./components/theme";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(THEME.LIGHT);
  return (
    <div className="App">
      <Router>
        <ThemeWidget />

        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </main>
      </Router>
      {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AboutPage /> */}
    </div>
  );
}

export default App;
