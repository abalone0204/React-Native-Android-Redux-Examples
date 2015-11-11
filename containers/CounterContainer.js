import React, {Component, PropTypes} from 'react-native';
import thunk from 'redux-thunk';
import counter from '../reducers/counter.js';
import Counter from '../components/Counter/counter.js';

import { bindActionCreators, combineReducers } from 'redux';
import { connect } from 'react-redux/native';
import * as CounterActions from '../actions/counter.js';

var {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    TouchableWithoutFeedback
} = React;


export default class CounterContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.topBlock}>
                    <Text style={styles.title}>
                        Counter
                    </Text>
                    <TouchableWithoutFeedback
                        style={styles.highlight}
                        underlayColor="white" 
                    >
                        <Image
                            style={styles.head}
                            source={require('../my-icon.png')}
                        />
                    </TouchableWithoutFeedback>
                </View> 
                <Counter {...this.props}></Counter>                
            </View>
        )
    }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

var styles = StyleSheet.create({
    'title': {
        flex: 1,
        marginTop: 50,
        color: '#50e3c2',
        textAlign: 'center',
        fontSize: 30
    },
    'highlight': {
        borderRadius: 100
    },
    'head': {
        flex: 1,
        width: 200,
        height: 200,
        borderRadius: 100
    },
    'topBlock': {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#23263a'
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);