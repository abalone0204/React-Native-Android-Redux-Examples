'use strict';
import React from 'react-native';
import { Provider } from 'react-redux/native';
import CounterContainer from '../containers/CounterContainer.js';
import store from '../store/counter.js';
var {Component} = React;
export default class CounterApp extends Component {
    render() {
        return (
          <Provider store={store}>
            {() => <CounterContainer />}
          </Provider>
        );
    }
}