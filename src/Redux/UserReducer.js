const CHANGE_FOLLOW = 'CHANGE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT =''

let initialState = {
    usersData: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1
}

const UsersReducer = (state = initialState, action) => {


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
        default:
            return state;

    }


}

export const changeFollowAC = (userId) =>
    ({type: CHANGE_FOLLOW, userId})

export const setUsersAC = (usersData) =>
    ({type: SET_USERS, usersData})
export const setCurrentPageAC = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalCountAC = (totalCount) =>
    ({type: SET_TOTAL_COUNT, totalCount})


export default UsersReducer;


