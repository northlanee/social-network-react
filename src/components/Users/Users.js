import React from "react";

import s from './Users.module.css';

const Users = ({users}) => {
    return (
        <div>{
            users.map(user => {
                return (
                    <div>{user.userName}</div>
                )
            })
        }</div>
    );
};

export default Users;
