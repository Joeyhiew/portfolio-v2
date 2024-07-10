import Sun from "../../assets/sun.png";
import Rope from "../../assets/string.png";
import LightRope from "../../assets/dark-string.png";
import styles from "./index.module.scss";
import Moon1 from "../../assets/moon3.png";
import { THEME } from "../../constants";
import { useTheme } from "./theme-provider";
import cx from "classnames";

type ThemeWidgetType = {
  userTheme: THEME;
};

const ThemeWidget = ({ userTheme }: ThemeWidgetType) => {
  const { theme, toggleTheme } = useTheme();

  const handleChangeTheme = (theme: THEME) => {
    if (theme === THEME.DARK) {
      document.documentElement.setAttribute("data-theme", "light");
      toggleTheme(THEME.LIGHT);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      toggleTheme(THEME.DARK);
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
          <img
            className={styles.rope}
            src={theme === THEME.DARK ? Rope : LightRope}
          />
          <img
            className={styles.icon}
            onClick={() => handleChangeTheme(theme)}
            src={theme === THEME.LIGHT ? Sun : Moon1}
          />
        </div>
      </div>
    </div>
  );
};
export default ThemeWidget;
