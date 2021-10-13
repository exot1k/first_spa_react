import React, {FC, useEffect, useRef, useState} from "react";
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
    const dispatch = useDispatch();
    const status = useSelector((state: appStateType) => state.chat.status);

    useEffect(() => {
        dispatch(startMessagesListening());
    }, [])

    return (
        <div>
            {status === 'error' ?? <div>Some Err</div>}
            <Messages/>
            <AddMessageForm/>
        </div>
    )
}

const Messages: FC = () => {
    const messages = useSelector((state: appStateType) => state.chat.messages);
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const [isAutoScroll, setIsAutoScroll] = useState(false);

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs(element.scrollHeight - element.scrollTop) < 800) {
            !isAutoScroll && setIsAutoScroll(true);
        } else {
            isAutoScroll && setIsAutoScroll(false);
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <div style={{height: '500px', overflowY: 'auto'}} onScroll={scrollHandler}>
            {messages.map((message, index) => <Message key={index} message={message}/>)}
            <div ref={messagesAnchorRef}></div>
        </div>
    )
}

const Message: FC<{ message: ChatMessageType }> = React.memo(({message}) => {
    return (
        <div>
            <Avatar src={message.photo}/> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
})

const AddMessageForm: FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch();
    const status = useSelector((state: appStateType) => state.chat.status);

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
                <button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    )
}


export default ChatPage;