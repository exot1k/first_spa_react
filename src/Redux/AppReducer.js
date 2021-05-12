import {getAuth} from "./AuthReducer";


const INITIALIZED_SUCCCESS = 'INITIALIZED_SUCCCESS';


let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCCESS:
            return ({...state, initialized: true})
        default:
            return state;
    }
}

export const initializedSuccess = () =>
    ({type: INITIALIZED_SUCCCESS});

export const initializeApp = () => (dispatch) => {
    dispatch(getAuth()).then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;
