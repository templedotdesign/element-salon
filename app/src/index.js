//Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import registerServiceWorker from './registerServiceWorker';

//Components
import App from './components/app/app';

//Redux
import store from './store/index';

//CSS
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
//registerServiceWorker();
