import React from 'react-native';
import * as ROUTERS from '../constants/routes.js';
import CounterApp from '../apps/CounterApp.js';
import TodoApp from '../components/TodoApp/TodoApp.js';
export default function router(route) {
    switch(route.name) {
        case ROUTERS.COUNTER_APP:
            return <CounterApp/>;
        case ROUTERS.TODO_APP:
            return <TodoApp/>
        default: 
            return <CounterApp/>;
    }
}