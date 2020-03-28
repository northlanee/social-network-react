import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setFetching(false);
        });
    }

    pageClickHandler = (page) => {
        this.props.setCurrentPage(page);
        this.props.setFetching(true);
        getUsers(this.props.pageSize, page).then(data => {
            this.props.setUsers(data.items);
            this.props.setFetching(false);
        });
    };

    render() {
        return (<>
            {this.props.isFetching ?
                <PreLoader/> :
                <Users {...this.props} pageClickHandler={this.pageClickHandler}/>}
        </>)
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.usersList,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
    }
};
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setTotalUsersCountAC(count));
//         },
//         setFetching: (isFetching) => {
//             dispatch(setFetchingAC(isFetching));
//         }
//     }
// };

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
})(UsersContainer);
