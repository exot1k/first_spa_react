import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/ProfileReducer";
import {Redirect, withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {

        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={"/login"} />
        return <Profile {...this.props} profile = {this.props.profile}/>
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let mapDispatchToProps =
    {
        getUserProfile
    }


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(ProfileContainer));