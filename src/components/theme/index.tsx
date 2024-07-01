import Sun from "../../assets/sun.png";
import Rope from "../../assets/rope.png";
import styles from "./index.module.scss";
// import Moon1 from "../../assets/moon1.png";
// import Moon2 from "../../assets/moon2.png";
// import Moon3 from "../../assets/moon3.png";
// import Moon4 from "../../assets/moon4.png";

const ThemeWidget = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconGroup}>
        <img className={styles.rope} src={Rope} />
        <img className={styles.sun} src={Sun} />
        {/* <Sun />
      <Moon1 />
      <Moon2 />
      <Moon3 />
      <Moon4 /> */}
      </div>
    </div>
  );
};
export default ThemeWidget;
