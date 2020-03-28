import React, {Component} from "react";
import Header from "./Header";
import {setUserAuth, setUserData, setUserProfile} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {getAuthMe, getProfile} from "../../api/api";

class HeaderContainer extends Component {

    componentDidMount() {
        getAuthMe().then(data => {
            if (data.resultCode === 0) {
                this.props.setUserData(data.data);
                return data.data.id;
            }
            return null;
        }).then(id => {
            if (id) {
                getProfile(id).then(data => {
                    this.props.setUserProfile(data);
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
