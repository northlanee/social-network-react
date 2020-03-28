import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profile-reducer";
import PreLoader from "../common/PreLoader/PreLoader";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let url = this.props.match.params.userId;
        if (!url) url = 2;
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + url)
            .then(response => {
                this.props.setProfileInfo(response.data);
            });
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
        profile: state.profileReducer.profile
    }
};

export default connect(mapStateToProps, {setProfileInfo})(withRouter(ProfileContainer));
