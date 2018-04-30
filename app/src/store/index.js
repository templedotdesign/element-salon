import { createStore } from 'redux';

import reducer from './reducers/cartReducer';

const store = createStore(reducer);

export default store;