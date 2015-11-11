/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react-native';
import { Provider } from 'react-redux/native';
// import AwesomeProject from './demo/AwesomeProject.js';
import CounterContainer from './container/CounterContainer.js';
import store from './store/counter.js';
var {
  AppRegistry, Component
} = React;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <CounterContainer />}
      </Provider>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => App);