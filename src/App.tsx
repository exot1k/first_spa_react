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
import {appStateType} from "./Redux/ReduxStore";

const Music = withSuspense(React.lazy(() => import('./components/Music/Music')));
const News = withSuspense(React.lazy(() => import('./components/News/News')));
const Settings = withSuspense(React.lazy(() => import('./components/Settings/Settings')));
const Friends = withSuspense(React.lazy(() => import('./components/Friends/Friends')));
const Dialogs = withSuspense(React.lazy(() => import('./components/Dialogs/DialogItem/DialogItemContainer')));
const UsersContainer = withSuspense(React.lazy(() => import('./components/Users/UsersContainer')));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
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
                <Navbar messageCount={1}/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                        <Route exact path={"/dialogs"} render={() => <Dialogs/>}/>
                        <Route path={"/profile/:userId?"} render={ withSuspense(ProfileContainer)}/>
                        <Route path={"/news"}  render={() =>  <News/>} />
                        <Route path={"/music"} render={() =>  <Music/>} />
                        <Route path={"/settings"} render={() =>  <Settings/>} />
                        <Route path={"/users"} render={() => <UsersContainer/>} />
                        <Route path={"/friends"} render={() =>  <Friends/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                    </Switch>
                </div>
                <SecondNavbar/>
            </div>
        );
    }
}

const mapStateToProps = (state:appStateType) => ({
    initialized: state.app.initialized
})

const mapDispatchToProps:DispatchPropsType = {
    initializeApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


