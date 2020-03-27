import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profile-reducer";
import PreLoader from "../common/PreLoader/PreLoader";

class ProfileContainer extends Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
            .then(response => {
                this.props.setProfileInfo(response.data);
            });
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

export default connect(mapStateToProps, {setProfileInfo})(ProfileContainer);
