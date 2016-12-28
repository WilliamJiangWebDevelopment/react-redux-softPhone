import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import phone from './phone'
import counter from './counter'
import todos from './todos'

const rootReducer = combineReducers({phone, counter, todos, routing: routerReducer});

export default rootReducer;