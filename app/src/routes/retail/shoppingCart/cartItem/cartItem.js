//Core
import React from 'react';

//Components
import Row from '../../../../components/shared/row/row';

//CSS
import classes from './cartItem.css';

const cartItem = (props) => {
  return (
    <div className={classes.cartItem}>
      <Row justify='space-between'>
        <h3>{props.name}</h3>
        <p>${props.price}</p>
      </Row>
    </div>
  );
};

export default cartItem;