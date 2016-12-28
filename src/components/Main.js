import React from 'react';
import { Link } from 'react-router';

/**
 * PhoneApp.js -> Main -> Dial / List
 * Main includes 2:
 * - Dial.js (dialButton, dialPad, dialControl)
 * - Users.js
 * - SelectDate.js
 * - SelectCity.js
 */
class Main extends React.Component {

    render() {
        return (
            <div className="root">
                <Link to='/' style={{cursor: 'pointer'}}>Home</Link>
                <ul className="menu">
                    <li><a href="/">Phones</a></li>
                    <li><a href="/list">Users</a></li>
                    <li><a href="/counter">Counter</a></li>
                    <li><a href="/datecity">Date City</a></li>
                    <li><a href="/todomvc">Todo MVC</a></li>
                </ul>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default Main;