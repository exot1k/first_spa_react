import React from 'react';
import {connect} from "react-redux";
import { setCurrentPage, getUsers,followUpdate} from "../../Redux/UserReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber,this.props.pageSize);

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersData={this.props.usersData}
                   onPageChanged={this.onPageChanged}
                   isFetchin={this.props.isFetching}
                   followingInProgress={this.props.followingInProgress}
                   followUpdate={this.props.followUpdate}/>
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

let mapDispatchToProps = {
    setCurrentPage,
    getUsers,
    followUpdate
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

