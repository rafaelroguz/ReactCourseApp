import React, { Fragment, useState } from "react";

import Burger from "../../components/Burger/Burger";

const BurgerBuilder = props => {
  const [ingredients, setIngredients] = useState({
    meat: 1,
    cheese: 0,
    salad: 0,
    bacon: 0
  });

  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <div>Build Control Component</div>
    </Fragment>
  );
};

export default BurgerBuilder;
