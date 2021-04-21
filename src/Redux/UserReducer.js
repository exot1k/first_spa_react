const CHANGE_FOLLOW = 'CHANGE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT ='SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING  ='TOGGLE_IS_FETCHING'

let initialState = {
    usersData: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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


export default usersReducer;


