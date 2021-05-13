import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import SecondNavbar from "./components/SecondNavBar/SecondNavbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Friends = React.lazy(() => import('./components/Friends/Friends'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                    <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                    <Route exact path={"/dialogs"} render={withSuspense(Dialogs)}/>
                    <Route path={"/profile/:userId?"} render={withSuspense(ProfileContainer)}/>
                    <Route path={"/news"}  render={withSuspense(News)} />
                    <Route path={"/music"} render={withSuspense(Music)} />
                    <Route path={"/settings"} render={withSuspense(Settings)} />
                    <Route path={"/users"} render={withSuspense(UsersContainer)} />
                    <Route path={"/friends"} render={withSuspense(Friends)}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                    </Switch>
                </div>
                <SecondNavbar/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const mapDispatchToProps = {
    initializeApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


