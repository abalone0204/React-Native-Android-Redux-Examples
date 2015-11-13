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
    handlePress(){
        let {route, navigator}=this.props;
        navigator.push({name: "TodoApp"})
    }
    renderNavItems(){
        let {route, navigator}=this.props;

    }
    render() {
        let {route, navigator}=this.props;
        console.log(ROUTES);
        return (
            <View style={styles.navView}>
              <TouchableHighlight
                style={styles.navItem}
                underlayColor="#b1b1b1"
                onPress={this.handlePress}
              >
                <Text style={styles.navItemText}>Counter</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.navItem}
                underlayColor="#b1b1b1"
                onPress={this.handlePress}
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