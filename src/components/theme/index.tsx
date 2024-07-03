import { useState } from "react";
import Sun from "../../assets/sun.png";
import Rope from "../../assets/string.png";
import styles from "./index.module.scss";
import Moon1 from "../../assets/moon3.png";
import { THEME } from "../../constants";
import cx from "classnames";

type ThemeWidgetType = {
  userTheme: THEME;
};

const ThemeWidget = ({ userTheme }: ThemeWidgetType) => {
  const [theme, setTheme] = useState(userTheme);

  const handleChangeTheme = (
    theme: THEME,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (theme === THEME.DARK) {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme(THEME.LIGHT);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme(THEME.DARK);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ position: "relative" }}>
          <div className={styles.container}>
            <div
              className={cx(
                styles.bgMode,
                userTheme === THEME.DARK ? styles.light : styles.dark,
                theme !== userTheme ? styles.active : ""
              )}
            ></div>
          </div>
        </div>
        <div className={styles.iconGroup} id="icon-group">
          <img className={styles.rope} src={Rope} />
          <img
            className={styles.icon}
            onClick={(e) => handleChangeTheme(theme, e)}
            src={theme === THEME.LIGHT ? Sun : Moon1}
          />
        </div>
      </div>
    </div>
  );
};
export default ThemeWidget;
