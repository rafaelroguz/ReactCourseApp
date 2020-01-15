import React from "react";

import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let tranformIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    }) // Returns an array of arrays
    .reduce((prevArr, currentArr) => {
      return prevArr.concat(currentArr);
    }, []); // Flatens the array, which is concatenating all the inside arrays into a single array

  if (tranformIngredients.length === 0) {
    tranformIngredients = <p>Please add some ingredients</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {tranformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
