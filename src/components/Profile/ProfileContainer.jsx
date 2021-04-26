import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/ProfileReducer";
import {Redirect, withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {

        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {

        return <Profile {...this.props} profile = {this.props.profile}/>
    }

}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps =
    {
        getUserProfile
    }


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AuthRedirectComponent));