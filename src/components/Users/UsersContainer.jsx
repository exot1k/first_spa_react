import React from 'react';
import {connect} from "react-redux";
import {changeFollow, setUsers, setCurrentPage, setTotalCount, setFetching, getUsers} from "../../Redux/UserReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
        /*this.props.setFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalCount(data.totalCount)
                this.props.setFetching(false);
            })*/
    }

    onPageChanged = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setFetching(false);
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   usersData={this.props.usersData}
                   onPageChanged={this.onPageChanged}
                   changeFollow={this.props.changeFollow}
                   isFEtchin={this.props.isFetching}/>
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = {
    changeFollow, setUsers, setCurrentPage, setTotalCount, setFetching, getUsers
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

