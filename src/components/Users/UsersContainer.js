import React from "react";
import {connect} from "react-redux";
import {acceptFollow, acceptUnfollow, getUsers} from "../../redux/users-reducer";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    pageClickHandler = (page) => {
        this.props.getUsers(this.props.pageSize, page);
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
    const r = state.usersReducer;
    return {
        users: r.usersList,
        pageSize: r.pageSize,
        totalUsersCount: r.totalUsersCount,
        currentPage: r.currentPage,
        isFetching: r.isFetching,
    }
};

export default connect(mapStateToProps, {acceptFollow, acceptUnfollow, getUsers})(UsersContainer);
