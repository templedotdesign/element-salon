//Core
import React, { Component } from 'react';
import classes from './contact.css';


class Contact extends Component {
  render() {
    return (
      <div className={classes.contact}>
        <div className={classes.icons}>
          <a href='https://www.facebook.com/ryantemple31' target='_blank noopener noreferrer'><i className="fab fa-facebook-f"></i></a>
          <a href='https://www.facebook.com/ryantemple31' target='_blank noopener noreferrer'><i className="fab fa-twitter"></i></a>
          <a href='https://www.facebook.com/ryantemple31' target='_blank noopener noreferrer'><i className="fab fa-instagram"></i></a>
          <a href='https://www.facebook.com/ryantemple31' target='_blank noopener noreferrer'><i className="far fa-envelope"></i></a>
        </div>
      </div>
    );
  }
}

export default Contact;