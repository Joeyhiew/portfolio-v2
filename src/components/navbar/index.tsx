import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import { IoClose, IoMenu } from "react-icons/io5";
import Profile from "../../assets/profile.jpg";
import Astronaut from "../../assets/astronaut.gif";
import { useMediaQuery } from "react-responsive";
import cx from "classnames";
import styles from "./index.module.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const renderPCNavlink = () => (
    <div className={styles.navMenuWrapper}>
      <Avatar src={Profile} className={styles.avatar} />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink to="/" className="nav-link">
            About
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );

  const renderMobileNavLinks = () => (
    <div className={styles.navMenuWrapper} id="nav-menu">
      <IoMenu onClick={() => handleMenuToggle()} />
      <div className={cx(styles.sideBar, isMenuOpen ? styles.open : "")}>
        <IoClose
          onClick={() => handleMenuToggle()}
          className={cx(styles.icon, isMenuOpen ? styles.open : "")}
        />
        <img src={Astronaut} className={styles.gif} />
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" className="nav-link">
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <header className={styles.header}>
      <nav className="nav container">
        {isMobile ? (
          <div className={styles.navToggle} id="nav-toggle">
            {renderMobileNavLinks()}
          </div>
        ) : (
          <>{renderPCNavlink()}</>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
