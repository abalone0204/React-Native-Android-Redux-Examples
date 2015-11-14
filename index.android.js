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
  Text, DrawerLayoutAndroid, Navigator,
  ToolbarAndroid
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
            <View style={styles.container}>
             <ToolbarAndroid
                style={styles.toolbar}
                title="ReactNative + Redux"
                titleColor="#50e3c2"
                actions={[{title: 'nono'}]}
                navIcon={require('./my-icon.png')}
              />
            {router(route)}
            </View>
        </DrawerLayoutAndroid>   
    );    
  }
  render() {
    var renderScene = this.renderScene;
    const {COUNTER_APP, TODO_APP}= ROUTERS;
    var initialRouteStack = [{
                  name: COUNTER_APP
                },{
                  name: TODO_APP
                }];
    return (
            <Navigator
                initialRouteStack={initialRouteStack}
                renderScene={renderScene}
            />
    );
  }
}
var styles = StyleSheet.create({
  'toolbar': {
    backgroundColor: '#23263a',
    height: 50
  },
  'container': {
    flex: 2,
  }
});
AppRegistry.registerComponent('AwesomeProject', () => App);