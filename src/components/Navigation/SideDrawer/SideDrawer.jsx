import React, { Fragment } from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

import styles from "./SideDrawer.module.css";

const SideDrawer = props => {
  console.log(props.open);

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={styles.SideDrawer}>
        <Logo height="11%" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
