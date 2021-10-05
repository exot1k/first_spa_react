import {FormAction} from "redux-form";
import {baseThunkType, inferActionTypes} from "./ReduxStore";
import {chatApi, ChatMessageType} from "../api/chatApi";

export type initialStateType = typeof initialState
type ActionTypes = inferActionTypes<typeof actions>
type ThunkType = baseThunkType<ActionTypes | FormAction>

let initialState = {
    messages: [] as ChatMessageType[]
}


const chatReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEIVED':
            return ({...state, messages: [...state.messages, ...action.payload]})

        default:
            return state;
    }

}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) =>
        ({type: 'MESSAGES_RECEIVED', payload: messages} as const),

}


export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe((messages) => {
        dispatch(actions.messagesReceived(messages))
    })
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message)
}

export default chatReducer;