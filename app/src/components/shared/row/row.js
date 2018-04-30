//Core
import React from 'react';

//CSS
import classes from './row.css';

const row = (props) => {
  const style = {
    display: 'flex',
    justifyContent: props.justify || 'space-around',
    alignItems: props.align || 'center',
    margin: `${props.space} 0`,
    flexWrap: props.wrap || 'wrap'
  };
  return (
    <div style={style} className={classes.row}>
      {props.children}
    </div>
  );
};

export default row;