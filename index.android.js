/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react-native';
import NavView from './components/common/NavView.js';
import CounterApp from './apps/CounterApp.js';
import router from './routers/AppRouter.js';
var {
  AppRegistry, Component, View, StyleSheet,
  Text, DrawerLayoutAndroid, Navigator
} = React;
import * as ROUTERS from './constants/routes.js';
class App extends Component {
  renderScene(route, navigator) {
    return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Right}
          renderNavigationView={() => 
            <NavView route={route} navigator={navigator}/>
          }
        >
            {router(route)}
        </DrawerLayoutAndroid>   
    );    
  }
  render() {
    var renderScene = this.renderScene;
    return (
            <Navigator
                initialRoute={{name: ROUTERS.COUNTER_APP}}
                renderScene={renderScene}
            />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);