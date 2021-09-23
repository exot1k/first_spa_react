import {DialogsDataType} from "../types/types";
import { inferActionTypes} from "./ReduxStore";

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Dimych',
            lastMessage: 'Hi',
            icon: ''
        },
        {
            id: 2,
            name: 'Andrey',
            lastMessage: 'How are you?',
            icon: ''
        },
        {
            id: 3,
            name: 'Djohn',
            lastMessage: 'Yo',
            icon: ''
        },
        {
            id: 4,
            name: 'Victor',
            lastMessage: 'Yo',
            icon: ''
        },
        {
            id: 5,
            name: 'Valery',
            lastMessage: 'Yo',
            icon: ''
        },
        {
            id: 6,
            name: 'Sany',
            lastMessage: 'Yo',
            icon: ''
        }] as Array<DialogsDataType>,
    newMessageText: ""
}

export type initialStateType = typeof initialState;
type ActionTypes = inferActionTypes<typeof actions>


const dialogsReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'SEND_NEW_MESSAGE':
            return (
                {
                    ...state,
                    dialogsData: [...state.dialogsData, {
                        id: 6,
                        name: 'Sany',
                        lastMessage: state.newMessageText,
                        icon: ''
                    }],
                    newMessageText: ''
                }
            )
            break;
        case 'UPDATE_NEW_MESSAGE':
            return ({...state, newMessageText: action.newMessageText})
        default:
            return state;
    }

}

export const actions = {
    updateNewMessageActionCreator: (newMessageText: string) =>
        ({type: 'UPDATE_NEW_MESSAGE', newMessageText} as const),
    sendMessageActionCreator: () =>
        ({type: 'SEND_NEW_MESSAGE'} as const)
}


export default dialogsReducer;