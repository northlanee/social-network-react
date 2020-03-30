import React, {Component} from "react";
import Header from "./Header";
import {getAuthMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {

    componentDidMount() {
        getAuthMe();
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

export default connect(mapStateToProps, {getAuthMe})(HeaderContainer);
