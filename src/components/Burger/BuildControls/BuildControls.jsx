import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import styles from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(control => {
        return (
          <BuildControl
            added={() => props.ingredientAdded(control.type)}
            key={control.label}
            label={control.label}
            removed={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]} // true or false
          />
        );
      })}
      <button
        className={styles.OrderButton}
        disabled={!props.purchasable}
        onClick={props.order}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
