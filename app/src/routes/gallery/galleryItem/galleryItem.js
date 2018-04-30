import React from 'react';

const galleryItem = (props) => {
  const style = {
    background: `url(${props.src})`,
    width: '30%',
    height: '33vh',
    margin: '5px',
    borderRadius: '5px',
    backgroundSize: props.bgSize || 'cover',
    cursor: 'pointer'
  }
  return (
    <div onClick={props.clicked} style={style}></div>
  );
}

export default galleryItem;