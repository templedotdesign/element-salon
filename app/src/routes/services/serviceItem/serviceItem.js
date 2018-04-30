//Core
import React from 'react';
import Row from '../../../components/shared/row/row';
import classes from './serviceItem.css';

const serviceItem = (props) => {
  return (
    <div className={classes.serviceItem}>
      <Row justify='center'>
        <p style={{fontFamily: 'sedgwick ave' }}>{props.name}</p>
      </Row>
      <span style={{textAlign: 'center'}}>{props.description}</span>
    </div>
    
  );
}

export default serviceItem;