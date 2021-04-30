import Header from "./Header";
import React from 'react';
import {connect} from "react-redux";
import {getAuth, logout, setAuthUserData} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth()
    }

    render() {
        return <Header {...this.props}/>
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToProps = {
    setAuthUserData,
    getAuth,
    logout
}


export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer) ;