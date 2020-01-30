import React, { Fragment } from "react";

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>
          {igKey}: props.ingredients[igKey]
        </span>
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients</p>

      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Fragment>
  );
};

export default OrderSummary;
