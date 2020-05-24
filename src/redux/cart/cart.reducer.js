import { TOGGLE_CART_HIDDEN } from "./cart.types";

const intialState = {
  isCartDropdownHidden: true,
};

const cartReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartDropdownHidden: !state.isCartDropdownHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
