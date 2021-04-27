import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../Redux/ProfileReducer";
import { withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {

        this.props.getUserProfile(this.props.match.params.userId)
        this.props.getUserStatus(this.props.match.params.userId)
    }

    render() {
        return <Profile {...this.props}
                        profile = {this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/>
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

let mapDispatchToProps =
    {
        getUserProfile,
        getUserStatus,
        updateStatus
    }



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
