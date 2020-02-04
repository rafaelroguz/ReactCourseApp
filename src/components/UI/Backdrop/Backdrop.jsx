import React from "react";

import styles from "./Backdrop.module.css";

const Backdrop = props => {
  console.log(props.show);

  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default Backdrop;
