import React, { Fragment, useState } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

import styles from "./Layout.module.css";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(true);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <Fragment>
      <Toolbar />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className={styles.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
