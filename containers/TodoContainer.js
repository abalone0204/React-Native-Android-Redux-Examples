import React, {Component, PropTypes} from 'react-native';
import thunk from 'redux-thunk';
import counter from '../reducers/counter.js';
import { bindActionCreators, combineReducers } from 'redux';
import { connect } from 'react-redux/native';
import * as TodoActions from '../actions/todo.js';
import TodoApp from '../components/TodoApp/TodoApp.js';
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

class TodoContainer extends Component {
    render() {
        return (
            <View>
                <TopBlock
                    text="Todo"
                />
                <TodoApp/>
            </View>
            );
    }
}

function mapStateToProps(state) {
  let {todo, visibilityFilter} = state;
  return {
    todo,
    visibilityFilter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);