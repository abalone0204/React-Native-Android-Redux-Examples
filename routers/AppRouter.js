import React from 'react-native';
import * as ROUTERS from '../constants/routes.js';
import CounterApp from '../apps/CounterApp.js';

export default function router(route) {
    switch(route) {
        case ROUTERS.COUNTER_APP:
            return <CounterApp/>;
        default: 
            return <CounterApp/>;
    }
}