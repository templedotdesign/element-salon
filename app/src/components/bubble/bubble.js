import React from 'react';

import classes from './bubble.css'

const bubble = (props) => {
  return (
    <p className={classes.speech}>{props.message}</p>
  )
}

export default bubble;