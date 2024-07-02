import { useEffect, useState } from "react";
import Sun from "../../assets/sun.png";
import Rope from "../../assets/string.png";
import styles from "./index.module.scss";
import Moon1 from "../../assets/moon3.png";
import { THEME } from "../../constants";
import { getUserTheme } from "../../utils";
import cx from "classnames";
// import Moon2 from "../../assets/moon2.png";
// import Moon3 from "../../assets/moon3.png";
// import Moon4 from "../../assets/moon4.png";

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

    // const element = document.getElementById("icon-group");
    // if (element) {
    //   element.className = `${cx(styles.iconGroup, styles.click)}`;
    //   void element?.offsetWidth;
    // }
    // void element?.offsetWidth;
    // element?.classList?.remove("click");
    // element?.classList?.add("click");
    // void element?.offsetWidth;
    // element?.classList?.remove("click");
    console.log(e);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.iconGroup}
        onClick={(e) => handleChangeTheme(theme, e)}
        id="icon-group"
      >
        <img className={styles.rope} src={Rope} />
        <img
          className={styles.icon}
          src={theme === THEME.LIGHT ? Sun : Moon1}
        />
      </div>
    </div>
  );
};
export default ThemeWidget;
