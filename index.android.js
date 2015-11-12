/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react-native';
import { Provider } from 'react-redux/native';
import NavigationView from './components/common/NavigationView.js';
import CounterApp from './apps/CounterApp.js';
var {
  AppRegistry, Component, View,
  Text, DrawerLayoutAndroid, Navigator
} = React;

class App extends Component {
  renderScene(route, navigator) {
    return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Right}
          renderNavigationView={() => <NavigationView/>}
        >
            <CounterApp
                name={route.name}
            />   
        </DrawerLayoutAndroid>   
    );    
  }
  render() {
    
    var renderScene = this.renderScene;
    return (
            <Navigator
                initialRoute={{name: 'CouterApp'}}
                renderScene={renderScene}
            />
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => App);