import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Avatar } from "antd";
import { IoClose, IoMenu } from "react-icons/io5";
import Profile from "../../assets/moon5.png";
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
      <Avatar src={Profile} />
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
      <div onClick={() => handleMenuToggle()}>
        <IoMenu />
      </div>
      {isMenuOpen && (
        <div className={styles.sideBar}>
          <IoClose onClick={() => handleMenuToggle()} />
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
      )}
    </div>
  );

  const renderNavLinks = () => (
    <div className={styles.navMenuWrapper} id="nav-menu">
      <div className={cx(styles.navMenu, isMenuOpen ? "" : "hide")}>
        {isMobile && (
          <div
            className={styles.navClose}
            id="nav-close"
            onClick={() => handleMenuToggle()}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </div>
        )}
        {isMobile && !isMenuOpen ? (
          <></>
        ) : (
          <div>
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
        )}
      </div>
    </div>
  );

  return (
    <header className={styles.header}>
      <nav className="nav container">
        {isMobile ? (
          <div className={styles.navToggle} id="nav-toggle">
            {/* <IoMenu /> */}
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
