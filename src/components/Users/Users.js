import React from "react";

import s from './Users.module.css';
import User from "./User/User";
import axios from "axios";
import Pagination from "./Pagination/Pagination";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    pageClickHandler = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {

        const usersList = this.props.users.map(user => {
            return <User key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow} />
        });

        return (
            <div>
                <Pagination
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    pageClickHandler={this.pageClickHandler}
                />
                {usersList}
            </div>
        )
    }

}

export default Users;
