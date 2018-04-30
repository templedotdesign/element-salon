//Core
import React from 'react';

import Row from '../../../../components/shared/row/row';

import classes from './order.css';

const order = (props) => {
  return (
    <div className={classes.order}>
      <Row justify='space-between'>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </Row>
      <Row justify='space-between'>
        <div>
          {props.items.map((item) => {
            return (
              <Row justify='flex-start'>
                <h3>{item.title} </h3>
                <h3>${item.price}</h3>
              </Row>
            );
          })}
        </div>
        <h1>${props.totalPrice}</h1>
      </Row>
    </div>
  );
};

export default order;