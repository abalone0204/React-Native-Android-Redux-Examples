import {
    ADD_TODO, REMOVE_TODO,
    COMPLETE_TODO,
    SET_VISIBILITY_FILTER,
    VISIBILITY_FILTER
} from "../constants/todo.js";
import {
    combineReducers
} from 'redux';

function todo(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state, {
                    text: action.text,
                    completed: false
                }
            ];
        case REMOVE_TODO:
            return [...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case COMPLETE_TODO:
            return [...state.slice(0, action.index),
                Object.assign({},
                    state[action.index], {
                        completed: true
                    }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

function visibilityFilter(state = VISIBILITY_FILTER.SHOW_ACTIVE, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }

}

var reducer = combineReducers({
    todo,
    visibilityFilter,
});
export default reducer;