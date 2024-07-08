import Astronaut from "../../assets/astronaut.gif";
import type { GetProps } from "antd";
import Icon from "@ant-design/icons";
import { ReactComponent as GithubSVG } from "../../assets/github-svg.svg";
import { ReactComponent as LinkedinSVG } from "../../assets/linkedin-svg.svg";
import { ReactComponent as MailSVG } from "../../assets/mail.svg";
import styles from "./index.module.scss";

type CustomIconComponentProps = GetProps<typeof Icon>;

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
        <div className={styles.buttonGroup}>
          <button className={styles.connectButton}>
            <div className={styles.connectContent}>
              Let's connect
              <div className={styles.arrow}></div>
            </div>
          </button>
          <GithubSVG className={styles.socialIcon} />
          <LinkedinSVG className={styles.socialIcon} />
          <MailSVG className={styles.socialIcon} />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
