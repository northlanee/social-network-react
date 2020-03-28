import React, {Component} from "react";
import Header from "./Header";
import axios from "axios";
import {setUserAuth, setUserData, setUserProfile} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setUserData(response.data.data);
                return response.data.data.id;
            }
            return null;
        }).then(id => {
            if (id) {
                axios.get("https://social-network.samuraijs.com/api/1.0/profile/" + id)
                    .then(response => {

                        this.props.setUserProfile(response.data);
                        this.props.setUserAuth(true);
                    });
            }
        });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userData: state.auth.userData,
        profile: state.auth.profile
    }
};

export default connect(mapStateToProps, {setUserData, setUserProfile, setUserAuth})(HeaderContainer);
