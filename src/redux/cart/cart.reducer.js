import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cart.types";

const intialState = {
  isCartDropdownHidden: true,
  cartItems: [],
};

const cartReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isCartDropdownHidden: !state.isCartDropdownHidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
