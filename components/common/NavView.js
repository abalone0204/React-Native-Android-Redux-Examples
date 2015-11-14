import React from 'react-native';
import * as ROUTES from '../../constants/routes.js';
var {
    Component,
    View, Text, 
    StyleSheet,
    TouchableHighlight
}= React;
export default class NavView extends Component {
    constructor(props){
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress(target){
        let {route, navigator}=this.props;
        return function () {
          navigator.push({name: target})  
        }
    }
    renderNavItems(){
        let {route, navigator}=this.props;

    }
    render() {
        let {route, navigator}=this.props;
        let {TODO_APP, COUNTER_APP} = ROUTES;
        return (
            <View style={styles.navView}>
              <TouchableHighlight
                style={styles.navItem}
                underlayColor="#b1b1b1"
                onPress={this.handlePress(COUNTER_APP)}
              >
                <Text style={styles.navItemText}>Counter</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.navItem}
                underlayColor="#b1b1b1"
                onPress={this.handlePress(TODO_APP)}
              >
                <Text style={styles.navItemText}>Todo</Text>
              </TouchableHighlight>
              
            </View>
            );
    }
}


var styles = StyleSheet.create({
  'navView': {
    'flex': 1,
    'backgroundColor': '#fff',
    'alignItems': 'center'
  },
  'navItem':{
    'padding': 20,
    'width': 300,
    'marginTop': 10, 
  },
  'navItemText':{
    'flex': 1,
    'textAlign': 'center',
    'fontSize': 20
  }
});