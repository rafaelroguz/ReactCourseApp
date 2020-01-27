import React from "react";

import styles from "./BuildControl.module.css";

const BuildControl = props => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Add} onClick={props.added}>
      Add
    </button>
    <button
      className={styles.Remove}
      disabled={props.disabled}
      onClick={props.removed}
    >
      Remove
    </button>
  </div>
);

export default BuildControl;
