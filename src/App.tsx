import { useState, useEffect } from "react";
import AboutPage from "./pages/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import ProjectPage from "./pages/projects";
import { THEME } from "./constants";
import { getUserTheme } from "./utils";
import ThemeWidget from "./components/theme";
import cx from "classnames";
import styles from "./index.module.scss";

function App() {
  const userSystemTheme = getUserTheme();

  return (
    <div
      className={cx(
        styles.App,
        userSystemTheme === THEME.DARK ? styles.dark : styles.light
      )}
    >
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
    </div>
  );
}

export default App;
