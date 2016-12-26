import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/main.css'

import App from './components/App';

import Dial from './components/Dial.js';
import DialList from './components/List.js';
import DateCity from './components/DateCity.js'


// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store.js';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Dial}></IndexRoute>
                <Route path="/list" component={DialList}></Route>
                <Route path="/datecity" component={DateCity}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));