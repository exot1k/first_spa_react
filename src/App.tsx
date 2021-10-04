import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import SecondNavbar from "./components/SecondNavBar/SecondNavbar";
import Header from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {appStateType} from "./Redux/ReduxStore";
import { UsersPages } from './components/Users/UsersPages';
import {Layout, Menu, Breadcrumb, Avatar, Row, Col} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import classes from "./components/Navbar/Navbar.module.css";

const Music = withSuspense(React.lazy(() => import('./components/Music/Music')));
const News = withSuspense(React.lazy(() => import('./components/News/News')));
const Settings = withSuspense(React.lazy(() => import('./components/Settings/Settings')));
const Friends = withSuspense(React.lazy(() => import('./components/Friends/Friends')));
const Dialogs = withSuspense(React.lazy(() => import('./components/Dialogs/DialogItem/DialogItemContainer')));
const ProfileContainer = withSuspense(React.lazy(() => import('./components/Profile/ProfileContainer')));
const ChatPage = withSuspense( React.lazy(() => import('./Pages/Chat/ChatPage')))



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

        const { SubMenu } = Menu;
        const {  Content, Footer, Sider } = Layout;

        return (
            <Layout>
                <Header/>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu

                                mode="inline"
                                defaultSelectedKeys={['1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="Menu">
                                    <Menu.Item key="1"><Link to={'/profile'}>Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to={'/dialogs'}>Message</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to={'/news'} >News</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to={'/music'}>Music</Link></Menu.Item>
                                    <Menu.Item key="5"> <Link to={'/settings'}>Settings</Link></Menu.Item>
                                    <Menu.Item key="7"> <Link to={'/users'}>Users</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Switch>
                                <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                                <Route exact path={"/dialogs"} render={() => <Dialogs/>}/>
                                <Route path={"/profile/:userId?"} render={ () => <ProfileContainer/>}/>
                                <Route path={"/news"}  render={() =>  <News/>} />
                                <Route path={"/music"} render={() =>  <Music/>} />
                                <Route path={"/settings"} render={() =>  <Settings/>} />
                                <Route path={"/users"} render={() => <UsersPages/>} />
                                <Route path={"/friends"} render={() =>  <Friends/>}/>
                                <Route path={"/login"} render={() => <Login/>}/>
                                <Route path={"/chat"} render={() => <ChatPage/>}/>
                                <Route path={"*"} render={() => <div>404</div>}/>
                            </Switch>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
            /*<div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar messageCount={1}/>
                <div className={"app-wrapper-content"}>
                    <Switch>
                        <Route exact path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                        <Route exact path={"/dialogs"} render={() => <Dialogs/>}/>
                        <Route path={"/profile/:userId?"} render={ () => <ProfileContainer/>}/>
                        <Route path={"/news"}  render={() =>  <News/>} />
                        <Route path={"/music"} render={() =>  <Music/>} />
                        <Route path={"/settings"} render={() =>  <Settings/>} />
                        <Route path={"/users"} render={() => <UsersPages/>} />
                        <Route path={"/friends"} render={() =>  <Friends/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                    </Switch>
                </div>
                <SecondNavbar/>
            </div>*/
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


