import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import styles from "./Toolbar.module.css";

const Toolbar = props => {
  return (
    <header className={styles.Toolbar}>
      <div>Menu</div>
      <Logo height="80%" />
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
