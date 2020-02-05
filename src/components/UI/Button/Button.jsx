import React from "react";

import styles from "./Button.module.css";

const Button = props => (
  <button className={styles[props.btnType]} onClick={props.clicked}>
    {props.children}
  </button>
);

export default Button;
