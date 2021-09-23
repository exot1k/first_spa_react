import Header from "./Header";
import React from 'react';
import {connect} from "react-redux";
import {logout} from "../../Redux/AuthReducer";
import {appStateType} from "../../Redux/ReduxStore";

type MapStatePropsType = {
        isAuth: boolean
        login: string | null
}

type MapDispatchPropsType = {

    logout: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header {...this.props}/>
    }

}


const mapStateToProps = (state:appStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToProps:MapDispatchPropsType = {
    logout
}


export default connect<MapStatePropsType,MapDispatchPropsType, {}, appStateType>(mapStateToProps,mapDispatchToProps)(HeaderContainer) ;