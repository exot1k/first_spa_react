import {usersAPI} from "../api/api";
import {usersDataType} from "../types/types";
import {appStateType, baseThunkType, inferActionTypes} from "./ReduxStore";
import {Dispatch} from "redux";


let initialState = {
    usersData: [] as Array<usersDataType>,
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // array of userid
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'CHANGE_FOLLOW':
            return ({
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed};
                    }
                    return u
                })
            })
        case 'SET_USERS':
            return ({
                ...state,
                usersData: [...action.usersData]
            })
        case 'SET_CURRENT_PAGE':
            return ({
                ...state,
                currentPage: action.currentPage
            })
        case 'SET_TOTAL_COUNT':
            return ({
                ...state,
                totalUsersCount: action.totalCount
            })
        case 'TOGGLE_IS_FETCHING':
            return ({
                ...state,
                isFetching: action.isFetching
            })
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return ({
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]

            })
        default:
            return state;
    }
}


type ActionTypes = inferActionTypes<typeof actions>

export const actions = {
    changeFollow: (userId: number) => ({type: 'CHANGE_FOLLOW', userId} as const),
    setUsers: (usersData: Array<usersDataType>) => ({type: 'SET_USERS', usersData} as const),
    setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalCount: (totalCount: number) => ({type: 'SET_TOTAL_COUNT', totalCount} as const),
    setFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleFollowingProgress: (userId: number, isFetching: boolean) =>
        ({type: 'TOGGLE_IS_FOLLOWING_PROGRESS', userId, isFetching} as const)
}


type ThunkType = baseThunkType<ActionTypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.setFetching(true));
        dispatch(actions.setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalCount(data.totalCount))
        dispatch(actions.setFetching(false));
    }

const callChangeFollow = async (dispatch: Dispatch<ActionTypes>, userId: number, apiMethod: any) => {
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actions.changeFollow(userId))
    }
    dispatch(actions.toggleFollowingProgress(userId, false))
}

export const followUpdate = (userId: number, followed: boolean): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFollowingProgress(userId, true))
    if (!followed) {
        callChangeFollow(dispatch, userId, await usersAPI.follow.bind(usersAPI));

    } else {
        callChangeFollow(dispatch, userId, await usersAPI.unFollow.bind(usersAPI));
    }
}

export default usersReducer;


