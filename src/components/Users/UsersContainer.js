import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setFetchingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import LoaderImg from './../../images/loader.gif';

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setFetching(false);
        });
    }

    pageClickHandler = (page) => {
        this.props.setCurrentPage(page);
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetching(false);
            });
    };

    render() {
        return (<>
            {this.props.isFetching ?
                <div><img src={LoaderImg} alt="Loading..."/></div> :
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    pageClickHandler={this.pageClickHandler}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}
            </>)
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.usersList,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count));
        },
        setFetching: (isFetching) => {
            dispatch(setFetchingAC(isFetching));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
