import {createSelector} from "reselect";
import {appStateType} from "../ReduxStore";

export const getUsersSelector = (state: appStateType) => {

    return state.usersPage.usersData
}
export const getPageSize = (state: appStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: appStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: appStateType) => {
    return state.usersPage.currentPage
}

export const getFetching = (state: appStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state: appStateType) => {
    return state.usersPage.followingInProgress
}

export const getUsersFilter = (state: appStateType) => {
    return state.usersPage.filter
}

export const getAuth = (state: appStateType) => {

    return state.auth
}
export const getUsersSuper = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})
