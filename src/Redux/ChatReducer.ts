import {FormAction} from "redux-form";
import {baseThunkType, inferActionTypes} from "./ReduxStore";
import {chatApi, ChatMessageType, statusType} from "../api/chatApi";

export type initialStateType = typeof initialState
type ActionTypes = inferActionTypes<typeof actions>
type ThunkType = baseThunkType<ActionTypes | FormAction>


let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as statusType
}

type ChatMessageTypeForMessages = ChatMessageType & {id: string}

const chatReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEIVED':
            return ({...state, messages: [...state.messages, ...action.payload.map(m => ({...m,id: 1}))].filter((m, index,array) =>   index < array.length-100)})
        case 'STATUS_CHANGED':
            return ({...state, status: action.payload.status})

        default:
            return state;
    }

}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) =>
        ({type: 'MESSAGES_RECEIVED', payload: messages} as const),
    statusChanged: (status: statusType) =>
        ({type: 'STATUS_CHANGED', payload: {status}} as const),
}


export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatApi.start()
    chatApi.subscribe('messages-received', (messages: ChatMessageType[]) => {
        dispatch(actions.messagesReceived(messages))
    })
    chatApi.subscribe('status-changed', (status: statusType) => {
        dispatch(actions.statusChanged(status))
    })
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatApi.sendMessage(message)
}

export default chatReducer;