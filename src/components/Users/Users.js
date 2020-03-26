import React from "react";

import s from './Users.module.css';
import User from "./User/User";
import axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        const usersList = this.props.users.map(user => {
            return <User key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow} />
        });

        return (
            <div>
                {usersList}
            </div>
        )
    }

}

export default Users;
