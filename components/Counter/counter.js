import React, {
    Component, PropTypes
}
from 'react-native';
var {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    TouchableOpacity
} = React;
import Button from '../common/Button.js';
export default class Counter extends Component {
    render() {
        let {decrement, increment, counter} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.count}>Counter: {counter} </Text>
                <View style={styles.btnContainer}>
                    <Button btnStyle={[
                            styles.btn,
                            {backgroundColor: "#27cc95"},
                            ]}
                            underlayColor='#50e3c2'
                            textStyle={styles.btnText}
                            text="Increment"
                            onPress={increment}
                    />
                    <Button btnStyle={[
                            styles.btn,
                            {backgroundColor: '#500'},
                            ]}
                            underlayColor="#300"
                            textStyle={styles.btnText}
                            text="Decrement"
                            onPress={decrement}
                    />
                </View>                
            </View>
            );
    }
}

var styles = StyleSheet.create({
  'container': {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  'btnContainer': {
    flex: 2,
    flexDirection: 'row'
  },
  'btn': {
    flex: 1,
    width: 120,
    margin: 10,
    padding: 10,
    borderRadius: 5
  },
  'btnText': {
    color: '#fff',
    textAlign: 'center'
  },
  'count': {
    flex: 1,
    margin: 50,
    fontSize: 20,
  }
});
