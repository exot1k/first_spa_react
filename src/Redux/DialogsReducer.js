const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


//const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
//const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


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
            }],
        newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_NEW_MESSAGE:
            let newMessage = {
                id: 6,
                name: 'Sany',
                lastMessage: state.newMessageText,
                icon: ''
            }
            state.dialogsData.push(newMessage);
            state.newMessageText = '';
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
        case UPDATE_NEW_MESSAGE:
            return ({...state, newMessageText: action.newMessage })

        default:
            return state;
    }

}

export const updateNewMessageActionCreator = (newMessage) =>
    ({type: UPDATE_NEW_MESSAGE, newMessage: newMessage});

export const sendMessageActionCreator = () =>
    ({type: SEND_NEW_MESSAGE})

export default dialogsReducer;