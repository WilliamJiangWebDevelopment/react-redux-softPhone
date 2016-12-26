import React from 'react';
import { Link } from 'react-router';

/**
 * App.js -> Main -> Dial / List
 * Main includes 2:
 * - Dial.js (dialButton, dialPad, dialControl)
 * - List.js
 * - SelectDate.js
 * - SelectCity.js
 */
class Main extends React.Component {

    render() {
        return (
            <div className="root">
                <Link to='/' style={{cursor: 'pointer'}}>Home</Link>
                <ul className="menu">
                    <li><a href="/">Soft Phone</a></li>
                    <li><a href="/list">List</a></li>
                    <li><a href="/datecity">Date City</a></li>
                </ul>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default Main;