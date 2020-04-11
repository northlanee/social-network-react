import React, {Component} from 'react';
import './App.css';

import {Route} from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import PreLoader from "./components/common/PreLoader/PreLoader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <PreLoader/>;
        return (
            <div className="App">
                <HeaderContainer/>
                <div className="content">
                    <Navbar/>
                    <main className="main">
                        <Route path="/messages" render={() => <MessagesContainer/>}/>
                        <Route path="/people" render={() => <UsersContainer/>}/>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route exact path="/login" render={() => <Login/>}/>
                    </main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
};

export default connect(mapStateToProps, {initializeApp})(App);
