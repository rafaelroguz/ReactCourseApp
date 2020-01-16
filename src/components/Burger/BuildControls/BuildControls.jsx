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
      {controls.map(control => {
        return (
          <BuildControl
            added={() => props.ingredientAdded(control.type)}
            key={control.label}
            label={control.label}
            removed={() => props.ingredientRemoved(control.type)}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
