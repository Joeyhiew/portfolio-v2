import { useState, useEffect } from "react";
import AboutPage from "./pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProjectPage from "./pages/projects";
import { THEME } from "./constants";
import { getUserTheme } from "./utils";
import ThemeWidget from "./components/theme";
import styles from "./index.module.scss";

function App() {
  const userSystemTheme = getUserTheme();

  return (
    <div className={styles.App}>
      <Router>
        <ThemeWidget userTheme={userSystemTheme} />
        <Navbar />
        <main className={styles.mainContent}>
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
