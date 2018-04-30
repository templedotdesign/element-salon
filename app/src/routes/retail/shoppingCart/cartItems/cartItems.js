//Core 
import React from 'react';
import { connect } from 'react-redux';

//Components
import CartItem from '../cartItem/cartItem';

const CartItems = (props) => {
  return (
    <div>
      {props.cart.map(item => {
        return (
          <CartItem key={Date.now() * Math.random()} name={item.title} price={item.price}/>
        )
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCart
  }
}

export default connect(mapStateToProps)(CartItems);