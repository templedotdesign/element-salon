//Core 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCart } from '../../../store/actions/actions';
import axios from 'axios';

//Components
import CartItem from './cartItem/cartItem';
import CartItems from './cartItems/cartItems';
import Row from '../../../components/shared/row/row';

//CSS 
import classes from './shoppingCart.css';

//Constants
import { ordersUrl } from '../../../constants/order';

class ShoppingCart extends Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = (event, id) => {
    event.preventDefault();
    this.setState({...this.state, [id]: event.target.value})
  }

  handleClick = (event) => {
    event.preventDefault();    
    const postUrl = `${ordersUrl}.json`;
    const order = {
      name: this.state.name,
      email: this.state.email,
      items: this.props.cart
    }
    axios.post(postUrl, order)
    .then(res => {
      console.log('update success')
      this.props.clear();
      this.setState({...this.state, name: '', email: ''})
    })
    .catch(err => {
      console.log(err)
    })
  }
  // componentDidMount() {
  //   this.setState({...this.state, items: this.props.cart});
  // }

  render() {
    return (
      <div className={classes.shoppingCart}>
        <div className={classes.heading}>
          <h1>Your Order</h1>
        </div>
        
        <div className={classes.orderForm}>
          <Row space-between>
            <label>Name:</label>
            <input value={this.state.name} onChange={(event) => {this.handleChange(event, 'name')}}/>
          </Row>
          <Row space-between>
            <label>Email:</label>
            <input value={this.state.email} onChange={(event) => {this.handleChange(event, 'email')}}/>
          </Row>
          <CartItems/>
          <CartItem name="Total Price" price={this.props.total}/>
          <Row justify='center'>
            <button onClick={this.handleClick}>Place Order</button>
          </Row>
        </div>
      
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shoppingCart,
    total: state.totalPrice
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {dispatch(clearCart())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);