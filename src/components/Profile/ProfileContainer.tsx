import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateStatus} from "../../Redux/ProfileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {appStateType} from "../../Redux/ReduxStore";
import {profileType} from "../../types/types";

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchToProps = {
    getUserProfile: (userId:number | null) => void
    getUserStatus: (userId:number | null) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: profileType) => Promise<any>
}
type pathParamsType = {
    userId: string
}
type propsType = MapPropsType & DispatchToProps & RouteComponentProps<pathParamsType>
class ProfileContainer extends React.Component<propsType > {
    componentDidMount() {
        const userId = +this.props.match.params.userId || this.props.userId
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps:propsType, prevState:propsType) {
        const userId = +this.props.match.params.userId || this.props.userId
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }

    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}/>
    }

}

let mapStateToProps = (state:appStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId
})

let mapDispatchToProps =
    {
        getUserProfile,
        getUserStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)