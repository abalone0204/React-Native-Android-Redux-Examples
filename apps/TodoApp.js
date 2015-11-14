'use strict';
import React from 'react-native';
import { Provider } from 'react-redux/native';
import TodoContainer from '../containers/TodoContainer.js';
import store from '../store/todo.js';
var {Component} = React;
export default class TodoApp extends Component {
    render() {
        return (
          <Provider store={store}>
            {() => <TodoContainer />}
          </Provider>
        );
    }
}