import React from "react";

import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const control = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{props.totPrice.toFixed(2)}</strong>
      </p>
      {control.map((ctrl) => (
        <BuildControl
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabledInfo={props.disabledInfo[ctrl.type]}
          label={ctrl.label}
          key={ctrl.label}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
