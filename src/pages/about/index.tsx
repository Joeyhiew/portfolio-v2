import { useState } from "react";
import Astronaut from "../../assets/astronaut.gif";
import { ReactComponent as GithubSVG } from "../../assets/github-svg.svg";
import { ReactComponent as LinkedinSVG } from "../../assets/linkedin-svg.svg";
import { ReactComponent as MailSVG } from "../../assets/mail.svg";
import cx from "classnames";
import styles from "./index.module.scss";

const AboutPage = () => {
  const [displayIcons, setDisplayIcons] = useState(false);

  const handleConnectClick = () => {
    setDisplayIcons(!displayIcons);
  };

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
          <button
            className={styles.connectButton}
            onClick={() => handleConnectClick()}
          >
            <div className={styles.connectContent}>
              Let's connect
              <div className={styles.arrow}></div>
            </div>
          </button>
          <GithubSVG
            className={cx(
              styles.socialIcon,
              displayIcons ? styles.iconDisplay : ""
            )}
          />
          <LinkedinSVG
            className={cx(
              styles.socialIcon,
              displayIcons ? styles.iconDisplay : ""
            )}
          />
          <MailSVG
            className={cx(
              styles.socialIcon,
              displayIcons ? styles.iconDisplay : ""
            )}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
