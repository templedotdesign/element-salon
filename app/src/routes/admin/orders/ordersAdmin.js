import React, { Component } from 'react';
import axios from 'axios';

import Order from './order/order';

import classes from './ordersAdmin.css';

import { ordersUrl } from '../../../constants/order';

class OrdersAdmin extends Component {
  state = {
    orders: []
  }
  
  calculateTotalPrice = (order) => {
    let sum = 0;
    order.items.forEach(item => {
        sum += item.price;
    })
    return sum;
  }

  componentDidMount() {
    const getUrl = `${ordersUrl}.json`;
    axios.get(getUrl)
    .then(res => {
      const orderKeys = Object.keys(res.data);
      orderKeys.forEach(key => {
        let items = [];
        const itemKeys = Object.keys(res.data[key].items);
        itemKeys.forEach(itemKey => {
          items.push(res.data[key].items[itemKey])
        })
        const order = {
          name: res.data[key].name,
          email: res.data[key].email, 
          items: items
        }
        this.setState({...this.state, orders: this.state.orders.concat(order)})
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    let orders = this.state.orders.map((order) => {
      return (
        <Order name={order.name} email={order.email} totalPrice={this.calculateTotalPrice(order)} items={order.items}/>
      );
    })
    return (
      <div>
        <div className={classes.heading}>
          <h1>Orders</h1>
        </div>
        {orders}
      </div>
    );
  }
}

export default OrdersAdmin;