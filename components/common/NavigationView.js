import React, {Component, PropTypes}from 'react-native';
var {Text, View} from React;

export default class NavigationView extends Component {
    render(){
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
    }
}