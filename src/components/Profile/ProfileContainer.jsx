import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/ProfileReducer";
import { withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {

        return <Profile {...this.props} profile = {this.props.profile}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps =
    {
        getUserProfile
    }



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

//connect(mapStateToProps,mapDispatchToProps)(withRouter(AuthRedirectComponent));