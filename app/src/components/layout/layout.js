//Core
import React from 'react';

//Components
import Navigation from '../navigation/navigation';

const layout = (props) => {
  return (
    <div>
      <Navigation/>
      {props.children}
    </div>
  );
};

export default layout;