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
import SecondNavbar from "./components/SecondNavBar/SecondNavbar";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

    //let messageCount = props.store.getState().dialogsPage.dialogsData.length;
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />
            <div className={"app-wrapper-content"}>
                <Route exact path={"/dialogs"} render={() => <Dialogs/> }/>
                <Route path={"/profile"} render={() =>  <Profile/>}/>
                <Route path={"/news"} render={() =>   <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() =>  <Settings/>}/>
                <Route path={"/friends"} render={() => <Friends/>}/>
                <Route path={"/users"} render={ () => <UsersContainer/>}/>
            </div>
            <SecondNavbar/>
        </div>
    );
}

export default App;
