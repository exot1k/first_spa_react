import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Message from "./components/Dialogs/Message/Message";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import SecondNavbar from "./components/SecondNavBar/SecondNavbar";
import Friends from "./components/Friends/Friends";

const App = (props) => {

    let messageCount = props.state.dialogsPage.dialogsData.length;
    //Компоненты
    let DialogsComponent = () => (
        <Dialogs state={props.state.dialogsPage}
                 dispatch={props.dispatch}/>
    )

    let ProfileComponent = () => (
        <Profile state={props.state.profilePage}
                 dispatch={props.dispatch}/>
    )
    let NewsComponent = () => (
        <News/>
    )
    let MusicComponent = () => (
        <Music/>
    )
    let SettingsComponent = () => (
        <Settings/>
    )

    let FriendsComponent = () => (
        <Friends/>
    )

    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar messageCount={messageCount}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} render={DialogsComponent} />
                    <Route path={"/profile"} render={ProfileComponent} />
                    <Route path={"/news"} render={NewsComponent}/>
                    <Route path={"/music"} render={MusicComponent}/>
                    <Route path={"/settings"} render={SettingsComponent}/>
                    <Route path={"/friends"} render={FriendsComponent}/>
                </div>
                <SecondNavbar/>
            </div>
    );
}

export default App;
