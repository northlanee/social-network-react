import React from "react";

import s from './Users.module.css';
import User from "./User/User";

const Users = ({users, follow, unfollow}) => {

    const usersList = users.map(user => {
        return <User user={user} follow={follow} unfollow={unfollow} />
    });

    return (
        <div>{usersList}</div>
    );

};

export default Users;
