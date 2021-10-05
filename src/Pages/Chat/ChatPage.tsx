import {FC, useEffect, useState} from "react";
import {Avatar} from "antd";
import {ChatMessageType} from "../../api/chatApi";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening} from "../../Redux/ChatReducer";
import {appStateType} from "../../Redux/ReduxStore";


const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat: FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(startMessagesListening());
    }, [])
    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}

const Messages: FC = () => {
    const messages = useSelector((state: appStateType) => state.chat.messages);
    return (
        <div style={{height: '500px', overflowY: 'auto'}}>
            {messages.map((message, index) => <Message key={index} message={message}/>)}
        </div>
    )
}

const Message: FC<{ message: ChatMessageType }> = ({message}) => {
    return (
        <div>
            <Avatar src={message.photo}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')
    const dispatch = useDispatch();


    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message));
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => {
                    setMessage(e.currentTarget.value)
                }} value={message}/>
            </div>
            <div>
                <button disabled={false} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    )
}


export default ChatPage;