import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import phones from './phones'
import counters from './counters'
import todos from './todos'
import status from '../constants/status'
import * as allReducers from './users'

const rootReducer = combineReducers({
    phones,
    counters,
    todos,
    status,
    users: allReducers.UserReducer,
    activeUser: allReducers.ActiveUserReducer,
    routing: routerReducer
});

export default rootReducer;