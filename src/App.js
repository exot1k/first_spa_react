import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import SecondNavbar from "./components/SecondNavBar/SecondNavbar";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    //let messageCount = props.store.getState().dialogsPage.dialogsData.length;
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />
            <div className={"app-wrapper-content"}>
                <Route exact path={"/dialogs"} render={() => <Dialogs/> }/>
                <Route path={"/profile/:userId?"} render={() =>  <ProfileContainer/>}/>
                <Route path={"/news"} render={() =>   <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() =>  <Settings/>}/>
                <Route path={"/users"} render={ () => <UsersContainer/>}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
            </div>
            <SecondNavbar/>
        </div>
    );
}

export default App;
