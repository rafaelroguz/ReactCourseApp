import React, { Fragment, useState, useEffect } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5
};

const BurgerBuilder = props => {
  const [ingredients, setIngredients] = useState({
    bacon: 0,
    cheese: 0,
    meat: 1,
    salad: 0
  });

  const [price, setPrice] = useState(4);

  // useEffect(() => {
  //   setPrice(prevPrice => {});
  // }, ingredients);

  const addIngredientHandler = type => {
    setIngredients(prevIngredients => ({
      ...prevIngredients,
      [type]: prevIngredients[type] + 1
    }));

    setPrice(prevPrice => prevPrice + ingredients[type]);
  };

  const removeIngredientHandler = type => {
    if (ingredients[type] > 0) {
      setIngredients(prevIngredients => ({
        ...prevIngredients,
        [type]: prevIngredients - 1
      }));

      setPrice(prevPrice => prevPrice - ingredients[type]);
    }
  };

  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
