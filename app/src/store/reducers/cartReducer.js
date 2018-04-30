import { actionTypes } from '../actions/actions';

const initialState = {
  shoppingCart: [],
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.addToCart:
      return {...state, shoppingCart: state.shoppingCart.concat(action.payload), totalPrice: state.totalPrice + action.payload.price}
    case actionTypes.clearCart:
      return {...state, shoppingCart: [], totalPrice: 0}
    default:
      return state;
  }
}

export default reducer;