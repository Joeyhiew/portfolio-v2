import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { THEME } from "./constants";
import { getUserTheme } from "./utils";
import ThemeWidget from "./components/theme";
import cx from "classnames";
import styles from "./index.module.scss";
import MainPage from "./pages";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  const userSystemTheme = getUserTheme();

  return (
    <ThemeProvider initalTheme={userSystemTheme}>
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
              <Route path="/" element={<MainPage />} />
            </Routes>
          </main>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
