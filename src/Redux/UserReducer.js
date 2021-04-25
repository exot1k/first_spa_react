import {usersAPI} from "../api/api";

const CHANGE_FOLLOW = 'CHANGE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    usersData: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FOLLOW:
            return ({
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed};
                    }
                    return u
                })
            })
        case SET_USERS:
            return ({
                ...state,
                usersData: [...action.usersData]
            })
        case SET_CURRENT_PAGE:
            return ({
                ...state,
                currentPage: action.currentPage
            })
        case SET_TOTAL_COUNT:
            return ({
                ...state,
                totalUsersCount: action.totalCount
            })
        case TOGGLE_IS_FETCHING:
            return ({
                ...state,
                isFetching: action.isFetching
            })
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return ({
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]

            })
        default:
            return state;

    }


}

export const changeFollow = (userId) =>
    ({type: CHANGE_FOLLOW, userId})

export const setUsers = (usersData) =>
    ({type: SET_USERS, usersData})

export const setCurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalCount = (totalCount) =>
    ({type: SET_TOTAL_COUNT, totalCount})

export const setFetching = (isFetching) =>
    ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(setFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(setFetching(false));
        })
}

export const toggleFollowingProgress = (userId, isFetching) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, isFetching})

export const followUpdate = (userId, followed) => (dispatch) => {
    dispatch(toggleFollowingProgress(userId,true))
    if(!followed){
        usersAPI.follow(userId).then(response =>{
            if(response.data.resultCode == 0){
                dispatch(changeFollow(userId))
            }
            dispatch(toggleFollowingProgress(userId,false))
        })
    }else{
        usersAPI.unFollow(userId).then(response =>{
            if(response.data.resultCode == 0){
                dispatch(changeFollow(userId))
            }
            dispatch(toggleFollowingProgress(userId,false))
        })
    }

}


export default usersReducer;


