import React from 'react';
import UserList from '../containers/UserList';
import UserDetail from '../containers/UserDetail';
require('../styles/style.scss');

const Users = () => (
    <div className="container-fluid">
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetail />
    </div>
);

export default Users;
