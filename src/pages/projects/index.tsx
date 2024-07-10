import { ReactComponent as WaveDarkSVG } from "../../assets/wave3.svg";
import { ReactComponent as WaveLightSVG } from "../../assets/wave-light.svg";
import { ReactComponent as MailSVG } from "../../assets/mail.svg";
import WIP from "../../assets/wip.png";

import styles from "./index.module.scss";
import { useTheme } from "../../components/theme/theme-provider";
import { THEME } from "../../constants";

const ProjectPage = () => {
  const { theme } = useTheme();

  return (
    <div id="projects" className={styles.container}>
      <WaveDarkSVG
        className={theme === THEME.DARK ? styles.waveDark : styles.waveLight}
      />
      <div className={styles.mainContent}>
        <div className={styles.text}>Some recent projects</div>
        <img src={WIP} className={styles.wip} />
        <div className={styles.text}>Adding projects soon...</div>
      </div>
    </div>
  );
};
export default ProjectPage;
