//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//Components
import Row from '../../shared/row/row';

//CSS
import classes from './navigationItem.css';

const navigationItem = (props) => {
  return (
    <NavLink to={props.to} onClick={props.closed} onMouseEnter={props.hover}>
      <div className={classes.navigationItem}>
        <Row>
          <p>{props.heading}</p>
        </Row>
      </div>
    </NavLink>
  );
};

export default navigationItem;