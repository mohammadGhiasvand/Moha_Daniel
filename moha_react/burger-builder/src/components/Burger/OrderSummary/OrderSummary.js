import React from "react";

import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>Your delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button btnType={"Danger"}>Cancel</Button>
      <Button btnType={"Success"}>Continue</Button>
    </div>
  );
}

export default OrderSummary;
