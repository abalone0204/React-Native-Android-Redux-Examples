import {
    ADD_TODO, REMOVE_TODO, COMPLETE_TODO,
    SET_VISIBILITY_FILTER
} from '../constants/todo.js';

export function addTodo (text) {
    return {
        type: ADD_TODO,
        text
    };
}

export function completeTodo (index) {
    return {
        type: COMPLETE_TODO,
        index
    }
}

export function removeTodo (index) {
    return {
        type: REMOVE_TODO,
        index
    }
}

export function setVisibilityFilter (filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }   
}