import counter from '../reducers/counter.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

var store = createStoreWithMiddleware(counter);
export default store;