import Astronaut from "../../assets/astronaut.gif";
import styles from "./index.module.scss";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <img src={Astronaut} className={styles.gif} />
      <div className={styles.content}>
        <div className={styles.header1}>Hey, I'm Joey!</div>
        <div className={styles.header2}>frontend developer</div>
        <div className={styles.header3}>
          I'm a software developer from Singapore. I dabble in all things
          frontend. I like painting, hiking, and sleeping
        </div>
        <button className={styles.button}>Let's connect</button>
      </div>
    </div>
  );
};
export default AboutPage;
