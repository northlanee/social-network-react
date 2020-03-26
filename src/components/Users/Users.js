import React from "react";

import s from './Users.module.css';
import User from "./User/User";
import axios from "axios";

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
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        const pagesArray = [];
        pagesArray.push(1);
        for (let i = 1; i <= pagesCount; i++) {
            if (i > this.props.currentPage - 3 && i < this.props.currentPage + 3 && i !== 1 && i !== pagesCount) pagesArray.push(i);
        }
        pagesArray.push(pagesCount);

        const paginationList = pagesArray.map(page => {
            return <li key={page}
                className={`${s.pageNumber} ${page===this.props.currentPage?s.selectedPage:null}`}
                onClick={() => this.pageClickHandler(page)}
            >{page}</li>
        });

        const usersList = this.props.users.map(user => {
            return <User key={user.id} user={user} follow={this.props.follow} unfollow={this.props.unfollow} />
        });

        return (
            <div>
                <ul className={s.pagination}>
                    {paginationList}
                </ul>
                {usersList}
            </div>
        )
    }

}

export default Users;
