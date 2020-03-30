import React, {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setProfileInfo} from "../../redux/profile-reducer";
import PreLoader from "../common/PreLoader/PreLoader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let id = this.props.match.params.userId;
        if (!id) id = 2;
        this.props.setProfile(id);
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
    }
};

export default connect(mapStateToProps, {setProfileInfo, setProfile})(withRouter(ProfileContainer));
