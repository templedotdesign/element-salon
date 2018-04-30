import React from 'react'
import { connect } from 'react-redux';

import classes from './retailItem.css';

import { addToCart } from '../../../store/actions/actions';

const retailItem = (props) => {
  const payload = {
    title: props.title,
    price: props.price
  }
  return (
    <div className={classes.retailItem}>
      <img className={classes.image} src={props.image} alt={props.title}/>
      <h3 className={classes.title}>{props.title}</h3>
      <p className={classes.price}>${props.price}</p>
      <p className={classes.description}>{props.description}</p>
      <div className={classes.buttons}>
        <button className={classes.addButton} onClick={() => props.addToCart(payload)}>Add To Cart</button>
        <button className={classes.cartButton} onClick={props.goToCart}>Go To Cart</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (payload) => dispatch(addToCart(payload))     
  }
}

export default connect(null, mapDispatchToProps)(retailItem);

