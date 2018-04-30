//Core
import React from 'react';

const column = (props) => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: props.justify || 'space-around',
    alignItems: props.align || 'center',
    width: props.width,
    height: props.height
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

export default column;