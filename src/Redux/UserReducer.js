const CHANGE_FOLLOW = 'CHANGE_FOLLOW';
const SET_USERS =' SET_USERS';

let initialState = {
    usersData: []
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
            return({
                ...state,
                usersData: [...state.usersData, ...action.usersData]
            })
        default:
            return state;

    }


}

export const changeFollowAC = (userId) =>
    ({type: CHANGE_FOLLOW, userId})

export const setUsersAC = (usersData) =>
    ({type: SET_USERS, usersData})


export default UsersReducer;


