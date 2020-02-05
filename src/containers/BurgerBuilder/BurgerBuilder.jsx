import React, { Fragment, useState, useEffect } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    meat: 0,
    salad: 0
  });

  const [price, setPrice] = useState(4);

  const [purchasable, setPuchasable] = useState(false);

  const [purchasing, setPurchasing] = useState(false);

  const purchaseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const puchaseContinueHandler = () => {
    alert("continue");
  };

  const updatePurchaseState = ingredientsUpdated => {
    const sum = Object.keys(ingredientsUpdated)
      .map(igKey => {
        return ingredientsUpdated[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPuchasable(sum > 0);
  };

  useEffect(() => {
    updatePurchaseState(ingredients);
  }, [ingredients]);

  const addIngredientHandler = type => {
    setIngredients(prevIngredients => ({
      ...prevIngredients,
      [type]: prevIngredients[type] + 1
    }));

    setPrice(prevPrice => prevPrice + INGREDIENT_PRICES[type]);
  };

  const removeIngredientHandler = type => {
    if (ingredients[type] > 0) {
      setIngredients(prevIngredients => ({
        ...prevIngredients,
        [type]: prevIngredients[type] - 1
      }));
      setPrice(prevPrice => prevPrice - INGREDIENT_PRICES[type]);
    }
  };

  const disabledInfo = {
    ...ingredients
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0; // Returns true or false for every key is the ingredient is cero
  }

  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={puchaseContinueHandler}
          ingredients={ingredients}
          price={price}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo} // {salad: false, meat: true, ...}
        price={price}
        purchasable={purchasable}
        order={purchaseHandler}
      />
    </Fragment>
  );
};

export default BurgerBuilder;
