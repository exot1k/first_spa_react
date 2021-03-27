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

const App = (props) => {
    let messageCount = props.messagesData.length;
    //Компоненты
    let DialogsComponent = () => (
        <Dialogs dialogsData={props.dialogsData}
                 messagesData={props.messagesData}/>
    )

    let ProfileComponent = () => (
        <Profile postsData={props.postsData}/>
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

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar messageCount={messageCount}/>
                <div className={"app-wrapper-content"}>
                    <Route path={"/dialogs"} render={DialogsComponent} />
                    <Route path={"/profile"} render={ProfileComponent} />
                    <Route path={"/news"} render={NewsComponent}/>
                    <Route path={"/music"} render={MusicComponent}/>
                    <Route path={"/settings"} render={SettingsComponent}/>
                </div>
                <SecondNavbar/>
            </div>
        </BrowserRouter>
    );
}

export default App;
