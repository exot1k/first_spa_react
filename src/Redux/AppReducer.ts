import {getAuth} from "./AuthReducer";
import {baseThunkType, inferActionTypes} from "./ReduxStore";



let initialState = {
    initialized: false
}
type initialStateType = typeof initialState
type actionType = inferActionTypes<typeof actions>
type ThunkType = baseThunkType<actionType>
const appReducer = (state = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return ({...state, initialized: true})
        default:
            return state;
    }
}

export const actions = {
    initializedSuccess:() =>
        ({type: 'INITIALIZED_SUCCESS'} as const)
}

export const initializeApp = ():ThunkType => async (dispatch) => {
    dispatch(getAuth()).then(() => {
        dispatch(actions.initializedSuccess());
    });
}

export default appReducer;
