import React, {Component, PropTypes} from 'react-native';
import thunk from 'redux-thunk';
import counter from '../reducers/counter.js';
import { bindActionCreators, combineReducers } from 'redux';
import { connect } from 'react-redux/native';
import * as CounterActions from '../actions/counter.js';
import Counter from '../components/Counter/counter.js';
import TopBlock from '../components/common/TopBlock.js';
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
                <TopBlock text="Counter"/>
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


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);