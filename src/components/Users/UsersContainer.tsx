import React from 'react';
import {connect} from "react-redux";
import {FilterType, followUpdate, getUsers} from "../../Redux/UserReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFetching,
    getFollowingProgress,
    getPageSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersSuper
} from "../../Redux/Selectors/UsersSelectors";
import {usersDataType} from "../../types/types";
import {appStateType} from "../../Redux/ReduxStore";


type MapStatePropsType = {
    pageSize: number
    currentPage: number
    isFetching: boolean
    totalUsersCount: number
    usersData: Array<usersDataType>
    followingInProgress: Array<number>
    filter: FilterType
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    followUpdate: (userId: number, isFollow: boolean) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter);
    }

    onFilterChanged = (filter: FilterType) => {
        this.props.getUsers(1, this.props.pageSize, filter);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersData={this.props.usersData}
                   onPageChanged={this.onPageChanged}
                   isFetching={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   followUpdate={this.props.followUpdate}
                   onFilterChanged={this.onFilterChanged}/>
        </>
    }
}


let mapStateToProps = (state: appStateType): MapStatePropsType => {
    return {
        usersData: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingProgress(state),
        filter: getUsersFilter(state)
    }
}

let mapDispatchToProps: MapDispatchPropsType = {
    getUsers,
    followUpdate
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, appStateType>(mapStateToProps, mapDispatchToProps)(UsersContainer);

