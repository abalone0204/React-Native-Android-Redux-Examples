import todo from '../reducers/todo.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

var store = createStoreWithMiddleware(todo);
export default store;
