import {createSelector} from "reselect";

export const getUsersSelector = (state) => {

    return state.usersPage.usersData
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}


export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state) => {
    return state.usersPage.followingInProgress
}

export const getUsersSuper = createSelector(getUsersSelector,(users) => {
    return  users.filter(u => true)
})
