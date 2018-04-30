const actionTypes = {
  addToCart: 'ADD_TO_CART',
  clearCart: 'CLEAR_CART'
};

const addToCart = (item) => {
  return {
    type: actionTypes.addToCart,
    payload: item
  }
}

const clearCart = () => {
  return {
    type: actionTypes.clearCart
  }
}

export {
  actionTypes,
  addToCart,
  clearCart,
}