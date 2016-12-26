import { createStore, compose } from 'redux';

import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

import status from './data/status';
import list from './data/list';


const defaultState = {
    status,
    list
};

const store = createStore(rootReducer, defaultState);


export const history = syncHistoryWithStore(browserHistory, store);


export default store;