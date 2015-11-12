/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react-native';
import { Provider } from 'react-redux/native';
import CounterApp from './apps/CounterApp.js';
var {
  AppRegistry, Component, View,
  Text, DrawerLayoutAndroid, Navigator
} = React;

class App extends Component {

  renderScene(route, navigator) {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
      );
    return (
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Right}
          renderNavigationView={() => navigationView}
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