import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter.js';
import { combineReducers } from 'redux';

function counter(state=0, action) {
    switch(action.type) {
        case INCREMENT_COUNTER:
            return state+1;
        case DECREMENT_COUNTER:
            return state-1;
        default:
            return state;
    }
}

var reducer = combineReducers({
    counter
});
export default reducer;