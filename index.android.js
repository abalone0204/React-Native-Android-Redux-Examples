/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react-native';
import { Provider } from 'react-redux/native';
// import AwesomeProject from './demo/AwesomeProject.js';
// import CounterContainer from './container/CounterContainer.js';
// import store from './store/counter.js';
import CounterApp from './apps/CounterApp.js';
var {
  AppRegistry, Component, View
} = React;

class App extends Component {
  render() {
    return (
      <View>
        <CounterApp/>
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => App);