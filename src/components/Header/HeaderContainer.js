import React, {Component} from "react";
import Header from "./Header";
import {authorize} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends Component {

    componentDidMount() {
        this.props.authorize();
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

export default connect(mapStateToProps, {authorize})(HeaderContainer);
