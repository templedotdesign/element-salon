//Core
import React, { Component } from 'react';
import classes from './home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className={classes.banner}>
          <div className={classes.heading}>
            <h1>Unique Boutique</h1>
            <h1>& Spalon</h1>
            <h1 style={{fontSize: '3rem'}}>@ The Element</h1>
          </div>
          <div className={classes.icons}>
            <a href='https://www.facebook.com/ryantemple31' target='_blank noopener noreferrer'><i className="fab fa-facebook"></i></a>
            <a href='https://www.facebook.com/ryantemple31' target='_blank noopener noreferrer'><i class="fab fa-twitter-square"></i></a>
            <a href='https://www.facebook.com/ryantemple31' target='_blank noopener noreferrer'><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;