import React, {FC} from 'react';
import {Avatar, Button, Col, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {Header} from "antd/es/layout/layout";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUserLogin, selectIsAuth} from "../../Redux/Selectors/AuthSelectors";
import {logout} from "../../Redux/AuthReducer";
import { Link } from 'react-router-dom';

type propsType = {
}

const AppHeader: FC<propsType> = (props) => {
    const isAuth = useSelector(selectIsAuth)
    const currentUserLogin = useSelector(selectCurrentUserLogin);

    const dispatch = useDispatch();

    const logoutCallback = () => {
        dispatch(logout())
    }
    return (
        <Header className="header">
            <div className="logo" />
            <Row>
                <Col span={14}/>
                {isAuth
                    ?<> <Col span={1}>
                        <Avatar alt={currentUserLogin || ''} style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>

                    </Col>
                        <Col span={5}>
                            <Button onClick={logoutCallback}>Log out</Button>
                        </Col>
                    </>
                    : <Col span={6}>
                        <Button>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Col>}
            </Row>
            {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>*/}

        </Header>
    );
}

export default AppHeader;