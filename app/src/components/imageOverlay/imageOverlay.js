import React from 'react';

import classes from './imageOverlay.css'

const imageOverlay = (props) => {
  let wrapperClasses = [classes.imageOverlay];
  if(props.hidden === true) {
    wrapperClasses.push(classes.hidden);
  }
  return (
    <div className={wrapperClasses.join(' ')}>
      <p onClick={props.clicked} style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        color: '#bbb',
        cursor: 'pointer',
        fontSize: '2rem'
      }}><i class="fas fa-times"></i></p>
      <div style={{
        width: '80%',
        height: '50%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
      }}>
        <div  style={{
          backgroundImage: `url(${props.data.src})`,
        }} className={classes.image}></div>
        <div style={{width: '50%'}}>
          {props.data.statements.map((statement) => {
            return (
              <p style={{
                color: '#bbb',
                margin: '20px',
              }}>
              {statement}
              </p>
            );
          })}
        </div>
      </div>
      <div style={{
        position: 'fixed',
        bottom: '10%',
        left: '0',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <p className={classes.arrow} onClick={props.decrement}><i className="fas fa-arrow-left"></i></p>
        <p className={classes.arrow} onClick={props.increment}><i className="fas fa-arrow-right"></i></p>
      </div>
    </div>
  );
};

export default imageOverlay;