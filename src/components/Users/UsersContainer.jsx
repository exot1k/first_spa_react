import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {changeFollowAC, setUsersAC} from "../../Redux/UserReducer";


let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: (userId) => {
            dispatch(changeFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;