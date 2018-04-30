//Core
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'

//Components
import RetailItem from '../../components/retail/retailItem/retailItem';

//CSS 
import classes from './retail.css';

//Constants
import items from '../../constants/retailItems';

class Retail extends Component {
  handleClick = (event, item) => {
    event.preventDefault();
    this.props.history.push('/detail');
  }

  goToCart = (event) => {
    event.preventDefault();
    this.props.history.push('/retail/cart')
  }

  render() {
    const itemKeys = Object.keys(items);
    return (
      <div style={{paddingTop: '50px'}}>
        <p className={classes.cart}><NavLink to='/retail/cart'><i className="fas fa-shopping-cart"></i></NavLink></p>
        <div className={classes.heading}>
          <h1>Our Products</h1>
        </div>
        {itemKeys.map(key => {
          return (
            <RetailItem 
              key={key} 
              goToCart={this.goToCart} 
              image={items[key].image} 
              title={items[key].title} 
              price={items[key].price} 
              description={items[key].description}/>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Retail);