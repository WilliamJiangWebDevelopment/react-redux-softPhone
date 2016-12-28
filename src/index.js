import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/main.css'

import PhoneApp from './containers/PhoneApp';
import CounterApp from './containers/CounterApp'
import TodoApp from './containers/TodoApp'
import Users from './components/Users.js'
import Dial from './components/Dial.js';
import DateCity from './components/DateCity.js'


// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store.js';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={PhoneApp}>
                <IndexRoute component={Dial}></IndexRoute>
                <Route path="/list" component={Users}></Route>
                <Route path="/counter" component={CounterApp}></Route>
                <Route path="/datecity" component={DateCity}></Route>
                <Route path="/todomvc" component={TodoApp}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));