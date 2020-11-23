import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    purchased: false,
    total: 4,
    purchaseable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = { ...this.state.ingredients };
    updatedIngredient[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.total;
    const newTotal = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredient, total: newTotal });
    this.updatePurchaseState(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount >= 1) {
      const updatedCount = oldCount - 1;
      const updatedIngredient = { ...this.state.ingredients };
      updatedIngredient[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.total;
      const newTotal = oldPrice - priceDeduction;
      this.setState({ ingredients: updatedIngredient, total: newTotal });
      this.updatePurchaseState(updatedIngredient);
    } else return;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHanlder = () => {
    this.setState({ purchasing: false });
  };
  render() {
    console.log(this.state.shallOrderSummaryToBeShown);
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          clickedBackdrop={this.purchaseCancelHanlder}
        >
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          totPrice={this.state.total}
          purchaseable={this.state.purchaseable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
