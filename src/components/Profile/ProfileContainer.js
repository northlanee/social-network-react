import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setProfile, setProfileInfo, updateStatus} from "../../redux/profile-reducer";
import PreLoader from "../common/PreLoader/PreLoader";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {
        let id = this.props.match.params.userId;
        if (!id) id = this.props.id;
        this.props.setProfile(id);
        this.props.getStatus(id);
    }

    componentWillUnmount() {
        this.props.setProfileInfo(null);
    }

    render() {

        if (!this.props.profile) {
            return <PreLoader/>
        }

        return (
            <Profile {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile,
        isAuth: state.auth.isAuth,
        status: state.profileReducer.status,
        id: state.auth.id
    }
};

export default compose(
    connect(mapStateToProps, {setProfileInfo, setProfile, getStatus, updateStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
