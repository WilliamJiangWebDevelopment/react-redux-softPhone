import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux';


function list(state = [], action={}) {
    switch (action.type) {
        case 'INCREMENT':
            console.log(state, action);
            break;
        default:
            return state;
    }
    return state;
}
//export default list;

function status(state = [], action={}) {
    switch (action.type) {
        case 'ADD_COMMENT':
            console.log(state, action);
            break;
        default:
            return state;
    }
    return state;
}

const rootReducer = combineReducers({list, status, routing: routerReducer});

export default rootReducer;